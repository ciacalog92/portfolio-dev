import { useLanguage } from '../../context/LanguageContext'

export function ClientAbout() {
  const { t } = useLanguage()

  return (
    <section className="c-section" id="about">
      <div className="c-container c-about">
        <div className="c-about__copy">
          <span className="c-kicker">{t.nav.about}</span>
          <h2 className="c-section__title">{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <ul className="c-checklist">
            {t.about.highlights.map((item) => (
              <li key={item}>
                <svg viewBox="0 0 24 24" aria-hidden className="c-check">
                  <path
                    d="M5 12.5l4 4 10-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="c-about__panel">
          <p className="c-about__panel-label">{t.client.eyebrow}</p>
          <div className="c-about__stats">
            {t.hero.stats.map((stat) => (
              <div key={stat.key}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
