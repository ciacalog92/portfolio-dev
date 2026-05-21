const FLOAT_LINES = [
  'import { build } from "./stack"',
  'export default async function deploy()',
  'const gestionale = await createApp()',
  'pnpm run build && pnpm test',
  'git push origin main',
  'SELECT * FROM orders WHERE status = 1',
  'interface Project { id: string }',
  'npm create vite@latest',
  'docker compose up -d',
  'return response.json()',
]

export function CodeBackground() {
  return (
    <div className="code-bg" aria-hidden>
      <div className="code-bg__grid" />
      <div className="code-bg__glow code-bg__glow--1" />
      <div className="code-bg__glow code-bg__glow--2" />
      <div className="code-bg__scanline" />
      {FLOAT_LINES.map((line, i) => (
        <span
          key={line}
          className="code-bg__line"
          style={{
            top: `${8 + (i * 9) % 82}%`,
            left: `${(i * 17) % 70}%`,
            animationDelay: `${i * 1.4}s`,
            animationDuration: `${18 + (i % 5) * 4}s`,
          }}
        >
          {line}
        </span>
      ))}
    </div>
  )
}
