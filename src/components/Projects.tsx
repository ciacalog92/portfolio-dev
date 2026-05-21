import { useLanguage } from '../context/LanguageContext'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const { t } = useLanguage()

  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <SectionHeading
          comment={t.projects.comment}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />
        <div className="projects-grid">
          {t.projects.items.map((project, i) => (
            <article
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <code className="project-card__path">{project.path}</code>
              <span className="project-card__tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-card__tech">
                {project.tech.map((tech) => (
                  <li key={tech}>
                    <span className="code-logo__str">&quot;{tech}&quot;</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
