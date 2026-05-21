import { useLanguage } from '../context/LanguageContext'
import { CodeWindow } from './CodeWindow'
import { TypingText } from './TypingText'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="code-logo__kw">const</span>{' '}
            <span className="hero__eyebrow-val">{t.hero.eyebrow}</span>
          </p>

          <div className="hero__terminal-line">
            <span className="hero__prompt">{t.hero.prompt}</span>{' '}
            <span className="hero__cmd">{t.hero.command}</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-comment">{'// '}</span>
            {t.hero.title}{' '}
            <em className="hero__title-accent">
              <TypingText text={t.hero.titleAccent} />
            </em>
          </h1>

          <p className="hero__subtitle">{t.hero.subtitle}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary btn--code">
              <span className="btn__prompt">$</span> {t.hero.ctaPrimary}
            </a>
            <a href="#projects" className="btn btn--ghost btn--code">
              <span className="btn__prompt">$</span> {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <CodeWindow title="stats.json" className="hero__panel">
          <pre className="hero__json">
            <code>
              <span className="code-logo__brace">{'{'}</span>
              {'\n'}
              {t.hero.stats.map((stat) => (
                <span key={stat.key}>
                  {'  '}
                  <span className="code-logo__prop">{stat.key}</span>
                  <span className="code-logo__op">: </span>
                  <span className="code-logo__str">&quot;{stat.value}&quot;</span>
                  <span className="code-logo__punct">, </span>
                  <span className="hero__json-comment">
                    {'// '}
                    {stat.label}
                  </span>
                  {'\n'}
                </span>
              ))}
              <span className="code-logo__brace">{'}'}</span>
            </code>
          </pre>
        </CodeWindow>
      </div>
    </section>
  )
}
