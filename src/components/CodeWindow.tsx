import type { ReactNode } from 'react'

type CodeWindowProps = {
  title: string
  children: ReactNode
  className?: string
}

export function CodeWindow({ title, children, className = '' }: CodeWindowProps) {
  return (
    <div className={`code-window ${className}`.trim()}>
      <div className="code-window__bar">
        <span className="code-window__dot" />
        <span className="code-window__dot" />
        <span className="code-window__dot" />
        <span className="code-window__title">{title}</span>
      </div>
      <div className="code-window__body">{children}</div>
    </div>
  )
}
