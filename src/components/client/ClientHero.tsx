import { useLanguage } from '../../context/LanguageContext'

export function ClientHero() {
  const { t } = useLanguage()

  return (
    <section className="c-hero" id="top">
      <div className="c-container c-hero__inner">
        <div className="c-hero__copy">
          <span className="c-eyebrow">{t.client.eyebrow}</span>
          <h1 className="c-hero__title">
            {t.hero.title}{' '}
            <span className="c-hero__title-accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="c-hero__subtitle">{t.hero.subtitle}</p>

          <div className="c-hero__actions">
            <a href="#contact" className="c-btn c-btn--primary">
              {t.client.ctaPrimary}
            </a>
            <a href="#projects" className="c-btn c-btn--ghost">
              {t.client.ctaSecondary}
            </a>
          </div>

          <ul className="c-hero__stats">
            {t.hero.stats.map((stat) => (
              <li key={stat.key}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="c-hero__visual" aria-hidden>
          <div className="c-mock">
            <div className="c-mock__bar">
              <span className="c-mock__dot" />
              <span className="c-mock__dot" />
              <span className="c-mock__dot" />
              <span className="c-mock__url">{t.client.mock.label}</span>
            </div>
            <div className="c-mock__body">
              <div className="c-mock__kpis">
                {t.client.mock.kpis.map((kpi) => (
                  <div key={kpi.label} className="c-mock__kpi">
                    <strong>{kpi.value}</strong>
                    <span>{kpi.label}</span>
                  </div>
                ))}
              </div>
              <div className="c-mock__chart">
                {[52, 70, 44, 86, 63, 95, 74].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
