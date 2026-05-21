import { type FormEvent, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { SITE_EMAIL } from '../config/site'
import { CodeWindow } from './CodeWindow'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(t.contact.mailtoSubject)
    const body = encodeURIComponent(
      `${name} <${email}>\n\n${message}`,
    )
    window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    form.reset()
  }

  return (
    <section className="section section--alt" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            comment={t.contact.comment}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            align="left"
          />
          <p className="contact-email">
            <span className="code-logo__kw">import</span>{' '}
            <span className="code-logo__op">{'{ email }'}</span>{' '}
            <span className="code-logo__kw">from</span>{' '}
            <span className="code-logo__str">&apos;contact&apos;</span>
            <br />
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
          </p>
        </div>

        <CodeWindow title={t.contact.formTitle}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span className="contact-form__label">{t.contact.name}</span>
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label>
              <span className="contact-form__label">{t.contact.email}</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </label>
            <label className="contact-form__full">
              <span className="contact-form__label">{t.contact.message}</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder={t.contact.messagePlaceholder}
              />
            </label>
            <button type="submit" className="btn btn--primary btn--code">
              <span className="btn__prompt">$</span> {t.contact.send}
            </button>
            {sent && (
              <p className="contact-form__note" role="status">
                <span className="code-logo__str">{'"OK"'}</span>
                <span className="code-logo__op"> — message queued</span>
              </p>
            )}
          </form>
        </CodeWindow>
      </div>
    </section>
  )
}
