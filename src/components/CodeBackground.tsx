import { useEffect, useRef, useState } from 'react'

const CODE_LINES = [
  'const app = await createApp({ name: "gestionale" })',
  'export async function deploy() {',
  '  await build()',
  '  await uploadAssets()',
  '  return { status: "ok" }',
  '}',
  '',
  'SELECT id, total FROM orders WHERE status = \'paid\'',
  'pnpm run build && pnpm test',
  '',
  'interface Project {',
  '  id: string',
  '  client: string',
  '  status: "draft" | "live"',
  '}',
  '',
  'router.post("/api/contact", async (req, res) => {',
  '  const { name, email, message } = req.body',
  '  await mailer.send({ to: OWNER, name, email, message })',
  '  res.json({ ok: true })',
  '})',
  '',
  'git commit -m "feat: ship new portfolio"',
  'git push origin main',
  '',
  'function useDebounce<T>(value: T, delay = 250) {',
  '  const [debounced, setDebounced] = useState(value)',
  '  useEffect(() => {',
  '    const id = setTimeout(() => setDebounced(value), delay)',
  '    return () => clearTimeout(id)',
  '  }, [value, delay])',
  '  return debounced',
  '}',
  '',
  'docker compose up -d',
  'curl -X POST https://api.example.com/orders',
]

const MAX_LINES = 28
const TYPE_MS = 22
const LINE_PAUSE_MS = 380

type RenderedLine = { id: number; text: string }

export function CodeBackground() {
  const [lines, setLines] = useState<RenderedLine[]>([])
  const [current, setCurrent] = useState('')
  const lineIdxRef = useRef(0)
  const charIdxRef = useRef(0)
  const idRef = useRef(0)

  useEffect(() => {
    let timer: number
    const tick = () => {
      const fullLine = CODE_LINES[lineIdxRef.current]
      if (charIdxRef.current < fullLine.length) {
        charIdxRef.current += 1
        setCurrent(fullLine.slice(0, charIdxRef.current))
        timer = window.setTimeout(tick, TYPE_MS)
      } else {
        const finished = fullLine
        idRef.current += 1
        const id = idRef.current
        setLines((prev) => {
          const next = [...prev, { id, text: finished }]
          return next.length > MAX_LINES ? next.slice(next.length - MAX_LINES) : next
        })
        setCurrent('')
        charIdxRef.current = 0
        lineIdxRef.current = (lineIdxRef.current + 1) % CODE_LINES.length
        timer = window.setTimeout(tick, LINE_PAUSE_MS)
      }
    }
    timer = window.setTimeout(tick, 400)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="code-bg" aria-hidden>
      <div className="code-bg__grid" />
      <div className="code-bg__glow code-bg__glow--1" />
      <div className="code-bg__glow code-bg__glow--2" />
      <div className="code-bg__scanline" />
      <div className="code-bg__terminal">
        {lines.map((line) => (
          <div key={line.id} className="code-bg__row">
            <span className="code-bg__prompt">{'>'}</span>
            <span className="code-bg__text">{line.text || ' '}</span>
          </div>
        ))}
        <div className="code-bg__row code-bg__row--active">
          <span className="code-bg__prompt">{'>'}</span>
          <span className="code-bg__text">{current}</span>
          <span className="code-bg__caret" />
        </div>
      </div>
    </div>
  )
}
