import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { SectionHeading } from './SectionHeading'

type Tag = 'site' | 'ecommerce' | 'gestionale' | 'integrations'

type Phase = 'idle' | 'playing' | 'result'

export function ProjectQuiz() {
  const { t } = useLanguage()
  const quiz = t.quiz
  const [phase, setPhase] = useState<Phase>('idle')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Tag[]>([])

  function start() {
    setStep(0)
    setAnswers([])
    setPhase('playing')
  }

  function pick(tag: Tag) {
    const next = [...answers, tag]
    setAnswers(next)
    if (step + 1 >= quiz.questions.length) {
      setPhase('result')
    } else {
      setStep((s) => s + 1)
    }
  }

  function goBack() {
    if (step === 0) return
    setAnswers((prev) => prev.slice(0, -1))
    setStep((s) => s - 1)
  }

  function computeWinner(): Tag {
    const tally: Record<Tag, number> = {
      site: 0,
      ecommerce: 0,
      gestionale: 0,
      integrations: 0,
    }
    for (const tag of answers) tally[tag] += 1
    let best: Tag = 'site'
    let bestCount = -1
    const order: Tag[] = ['gestionale', 'ecommerce', 'integrations', 'site']
    for (const tag of order) {
      if (tally[tag] > bestCount) {
        bestCount = tally[tag]
        best = tag
      }
    }
    return best
  }

  const total = quiz.questions.length
  const progressPct = phase === 'playing' ? (step / total) * 100 : phase === 'result' ? 100 : 0
  const current = quiz.questions[step]
  const winner = phase === 'result' ? computeWinner() : null
  const result = winner ? quiz.results[winner] : null

  return (
    <section className="section" id="quiz">
      <div className="container">
        <SectionHeading comment={quiz.comment} title={quiz.title} subtitle={quiz.subtitle} />

        <div className="quiz">
          {phase === 'idle' && (
            <div className="quiz__intro">
              <p className="quiz__intro-text">{quiz.intro}</p>
              <button type="button" className="btn btn--primary" onClick={start}>
                {quiz.start}
              </button>
            </div>
          )}

          {phase === 'playing' && current && (
            <div className="quiz__board">
              <div className="quiz__progress">
                <div className="quiz__progress-meta">
                  <span>
                    {quiz.progress} {step + 1}/{total}
                  </span>
                  <span>{Math.round(progressPct)}%</span>
                </div>
                <div className="quiz__progress-bar">
                  <div
                    className="quiz__progress-fill"
                    style={{ width: `${((step + 1) / total) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="quiz__question">{current.q}</h3>

              <div className="quiz__options">
                {current.options.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    className="quiz__option"
                    onClick={() => pick(opt.tag as Tag)}
                  >
                    <span className="quiz__option-dot" aria-hidden />
                    <span className="quiz__option-label">{opt.label}</span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button type="button" className="quiz__back" onClick={goBack}>
                  ← {quiz.back}
                </button>
              )}
            </div>
          )}

          {phase === 'result' && result && (
            <div className="quiz__result">
              <p className="quiz__result-eyebrow">{quiz.finalEyebrow}</p>
              <h3 className="quiz__result-title">{result.title}</h3>

              <div className="quiz__result-block">
                <p className="quiz__result-block-title">{quiz.whyTitle}</p>
                <p className="quiz__result-why">{result.why}</p>
              </div>

              <div className="quiz__result-block">
                <p className="quiz__result-block-title">{quiz.includesTitle}</p>
                <ul className="quiz__result-list">
                  {result.includes.map((item) => (
                    <li key={item}>
                      <span className="quiz__result-check" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="quiz__result-actions">
                <button type="button" className="btn btn--ghost" onClick={start}>
                  {quiz.restart}
                </button>
                <a href="#contact" className="btn btn--primary">
                  {quiz.contactCta}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
