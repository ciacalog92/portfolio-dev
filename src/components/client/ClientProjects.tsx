import { useLanguage } from '../../context/LanguageContext'

export function ClientProjects() {
  const { t } = useLanguage()

  return (
    <section className="c-section c-section--alt" id="projects">
      <div className="c-container">
        <header className="c-section__head">
          <span className="c-kicker">{t.nav.projects}</span>
          <h2 className="c-section__title">{t.projects.title}</h2>
          <p className="c-section__sub">{t.projects.subtitle}</p>
        </header>

        <div className="c-grid c-grid--2">
          {t.projects.items.map((project) => (
            <article key={project.title} className="c-card c-card--project">
              <div className="c-project__thumb" aria-hidden>
                <span className="c-project__initial">
                  {project.title.charAt(0)}
                </span>
                <span className="c-tag">{project.tag}</span>
              </div>
              <div className="c-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="c-pills">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
