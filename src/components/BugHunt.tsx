import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { SectionHeading } from './SectionHeading'

type Puzzle = {
  id: string
  lang: string
  code: string[]
  bugLine: number
  hintIt: string
  hintEn: string
}

const PUZZLES: Puzzle[] = [
  {
    id: 'js-sum',
    lang: 'javascript',
    code: [
      'function sum(arr) {',
      '  let total = 0',
      '  for (let i = 0; i <= arr.length; i++) {',
      '    total += arr[i]',
      '  }',
      '  return total',
      '}',
    ],
    bugLine: 2,
    hintIt: 'Off-by-one: il ciclo esce dai limiti dell\'array.',
    hintEn: 'Off-by-one: the loop runs past the array bounds.',
  },
  {
    id: 'ts-react',
    lang: 'tsx',
    code: [
      'function Counter() {',
      '  const [count, setCount] = useState(0)',
      '  useEffect(() => {',
      '    setInterval(() => setCount(count + 1), 1000)',
      '  }, [])',
      '  return <span>{count}</span>',
      '}',
    ],
    bugLine: 3,
    hintIt: 'Stale closure: count resta a 0 dentro l\'intervallo.',
    hintEn: 'Stale closure: count is captured as 0 inside the interval.',
  },
  {
    id: 'sql-inj',
    lang: 'sql',
    code: [
      'app.get("/user", (req, res) => {',
      '  const id = req.query.id',
      '  const q = `SELECT * FROM users WHERE id = ${id}`',
      '  db.query(q).then(r => res.json(r))',
      '})',
    ],
    bugLine: 2,
    hintIt: 'SQL injection: il parametro entra grezzo nella query.',
    hintEn: 'SQL injection: the parameter is concatenated raw.',
  },
  {
    id: 'py-mut',
    lang: 'python',
    code: [
      'def append_item(item, items=[]):',
      '    items.append(item)',
      '    return items',
      '',
      'print(append_item(1))',
      'print(append_item(2))',
    ],
    bugLine: 0,
    hintIt: 'Default mutabile: la lista è condivisa tra le chiamate.',
    hintEn: 'Mutable default: the list is shared across calls.',
  },
  {
    id: 'css-spec',
    lang: 'tsx',
    code: [
      'fetch("/api/data")',
      '  .then(res => res.json)',
      '  .then(data => render(data))',
      '  .catch(err => console.error(err))',
    ],
    bugLine: 1,
    hintIt: 'res.json è un metodo: manca la chiamata ().',
    hintEn: 'res.json is a method: the call () is missing.',
  },
]

const ROUND_SECONDS = 15

type Phase = 'idle' | 'playing' | 'feedback' | 'done'

export function BugHunt() {
  const { locale, t } = useLanguage()
  const [phase, setPhase] = useState<Phase>('idle')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS)
  const [picked, setPicked] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | 'timeout' | null>(null)
  const tickRef = useRef<number | null>(null)

  const puzzle = PUZZLES[round]

  useEffect(() => {
    if (phase !== 'playing') return
    const id = window.setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          window.clearInterval(id)
          setFeedback('timeout')
          setPhase('feedback')
          return 0
        }
        return s - 1
      })
    }, 1000)
    tickRef.current = id
    return () => window.clearInterval(id)
  }, [phase, round])

  function startGame() {
    setRound(0)
    setScore(0)
    setPicked(null)
    setFeedback(null)
    setTimeLeft(ROUND_SECONDS)
    setPhase('playing')
  }

  function pickLine(idx: number) {
    if (phase !== 'playing') return
    if (tickRef.current) window.clearInterval(tickRef.current)
    setPicked(idx)
    if (idx === puzzle.bugLine) {
      setScore((s) => s + 100)
      setFeedback('correct')
    } else {
      setScore((s) => Math.max(0, s - 25))
      setFeedback('wrong')
    }
    setPhase('feedback')
  }

  function nextRound() {
    setPicked(null)
    setFeedback(null)
    if (round + 1 >= PUZZLES.length) {
      setPhase('done')
    } else {
      setRound((r) => r + 1)
      setTimeLeft(ROUND_SECONDS)
      setPhase('playing')
    }
  }

  function rankLabel() {
    const max = PUZZLES.length * 100
    const pct = score / max
    if (pct >= 0.9) return t.game.ranks.rockstar
    if (pct >= 0.7) return t.game.ranks.senior
    if (pct >= 0.4) return t.game.ranks.mid
    return t.game.ranks.junior
  }

  return (
    <section className="section" id="bug-hunt">
      <div className="container">
        <SectionHeading comment={t.game.comment} title={t.game.title} subtitle={t.game.subtitle} />

        <div className="bug-hunt">
          {phase === 'idle' && (
            <div className="bug-hunt__intro">
              <p className="bug-hunt__intro-text">{t.game.intro}</p>
              <button type="button" className="btn btn--primary" onClick={startGame}>
                {t.game.start}
              </button>
            </div>
          )}

          {(phase === 'playing' || phase === 'feedback') && (
            <div className="bug-hunt__board">
              <div className="bug-hunt__hud">
                <span className="bug-hunt__hud-item">
                  <span className="bug-hunt__hud-label">{t.game.round}</span>
                  <span className="bug-hunt__hud-value">
                    {round + 1}/{PUZZLES.length}
                  </span>
                </span>
                <span className="bug-hunt__hud-item">
                  <span className="bug-hunt__hud-label">{t.game.score}</span>
                  <span className="bug-hunt__hud-value">{score}</span>
                </span>
                <span
                  className={`bug-hunt__hud-item bug-hunt__hud-item--timer ${
                    timeLeft <= 5 ? 'bug-hunt__hud-item--low' : ''
                  }`}
                >
                  <span className="bug-hunt__hud-label">{t.game.time}</span>
                  <span className="bug-hunt__hud-value">{timeLeft}s</span>
                </span>
              </div>

              <div className="bug-hunt__code">
                <div className="bug-hunt__code-bar">
                  <span className="code-window__dot" />
                  <span className="code-window__dot" />
                  <span className="code-window__dot" />
                  <span className="bug-hunt__code-lang">{puzzle.lang}</span>
                </div>
                <pre className="bug-hunt__code-body">
                  {puzzle.code.map((line, idx) => {
                    const isBug = idx === puzzle.bugLine
                    const isPicked = picked === idx
                    const revealCorrect = phase === 'feedback' && isBug
                    const revealWrong = phase === 'feedback' && isPicked && !isBug
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`bug-hunt__line ${
                          revealCorrect ? 'bug-hunt__line--correct' : ''
                        } ${revealWrong ? 'bug-hunt__line--wrong' : ''}`}
                        onClick={() => pickLine(idx)}
                        disabled={phase !== 'playing'}
                      >
                        <span className="bug-hunt__line-no">{idx + 1}</span>
                        <span className="bug-hunt__line-code">{line || ' '}</span>
                      </button>
                    )
                  })}
                </pre>
              </div>

              {phase === 'feedback' && (
                <div
                  className={`bug-hunt__feedback bug-hunt__feedback--${feedback}`}
                  role="status"
                >
                  <p className="bug-hunt__feedback-headline">
                    {feedback === 'correct' && t.game.correct}
                    {feedback === 'wrong' && t.game.wrong}
                    {feedback === 'timeout' && t.game.timeout}
                  </p>
                  <p className="bug-hunt__feedback-hint">
                    {locale === 'it' ? puzzle.hintIt : puzzle.hintEn}
                  </p>
                  <button type="button" className="btn btn--primary" onClick={nextRound}>
                    {round + 1 >= PUZZLES.length ? t.game.finalTitle : t.game.next}
                  </button>
                </div>
              )}
            </div>
          )}

          {phase === 'done' && (
            <div className="bug-hunt__result">
              <p className="bug-hunt__result-eyebrow">{t.game.finalTitle}</p>
              <p className="bug-hunt__result-score">
                {score}
                <span>/ {PUZZLES.length * 100}</span>
              </p>
              <p className="bug-hunt__result-rank">{rankLabel()}</p>
              <div className="bug-hunt__result-actions">
                <button type="button" className="btn btn--ghost" onClick={startGame}>
                  {t.game.restart}
                </button>
                <a href="#contact" className="btn btn--primary">
                  {t.game.shareCta}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
