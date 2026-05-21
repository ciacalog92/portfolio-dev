type SectionHeadingProps = {
  comment: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export function SectionHeading({
  comment,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <header
      className={`section__header ${align === 'left' ? 'section__header--left' : ''}`}
    >
      <p className="section__comment">
        <span className="section__comment-kw">{'// '}</span>
        {comment}
      </p>
      <h2 className="section__title">{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}
