import { useEffect, useState } from 'react'

type TypingTextProps = {
  text: string
  speed?: number
  className?: string
}

export function TypingText({ text, speed = 42, className = '' }: TypingTextProps) {
  const [prevKey, setPrevKey] = useState(`${text}|${speed}`)
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  const currentKey = `${text}|${speed}`
  if (prevKey !== currentKey) {
    setPrevKey(currentKey)
    setDisplayed('')
    setDone(false)
  }

  useEffect(() => {
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return (
    <span className={`typing-text ${className}`.trim()}>
      {displayed}
      {!done && <span className="typing-text__cursor" aria-hidden />}
    </span>
  )
}
