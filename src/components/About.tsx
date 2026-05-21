import { useLanguage } from '../context/LanguageContext'
import { CodeLogo } from './CodeLogo'
import { CodeWindow } from './CodeWindow'
import { SectionHeading } from './SectionHeading'

export function About() {
  const { t } = useLanguage()

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <CodeWindow title="developer.ts" className="about-visual">
          <CodeLogo variant="snippet" />
        </CodeWindow>
        <div className="about-content">
          <SectionHeading
            comment={t.about.comment}
            title={t.about.title}
            align="left"
          />
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <ul className="about-list">
            {t.about.highlights.map((item) => (
              <li key={item}>
                <span className="about-list__prefix" aria-hidden>
                  →{' '}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
