import { useLanguage } from '../context/LanguageContext'
import { SectionHeading } from './SectionHeading'

export function Services() {
  const { t } = useLanguage()

  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          comment={t.services.comment}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />
        <div className="services-grid">
          {t.services.items.map((item, i) => (
            <article
              key={item.title}
              className="service-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="service-card__line" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>
              <code className="service-card__fn">{item.fn}</code>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="service-card__cursor" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
