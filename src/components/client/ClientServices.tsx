import { useLanguage } from '../../context/LanguageContext'
import { ServiceIcon } from './ServiceIcon'

export function ClientServices() {
  const { t } = useLanguage()

  return (
    <section className="c-section" id="services">
      <div className="c-container">
        <header className="c-section__head">
          <span className="c-kicker">{t.nav.services}</span>
          <h2 className="c-section__title">{t.services.title}</h2>
          <p className="c-section__sub">{t.services.subtitle}</p>
        </header>

        <div className="c-grid c-grid--4">
          {t.services.items.map((item, i) => (
            <article key={item.title} className="c-card c-card--service">
              <span className="c-card__icon">
                <ServiceIcon index={i} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
