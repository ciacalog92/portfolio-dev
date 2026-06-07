import { type FormEvent, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { SITE_EMAIL, whatsappUrl } from '../../config/site'

export function ClientContact() {
  const { locale, t } = useLanguage()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(t.contact.mailtoSubject)
    const body = encodeURIComponent(`${name} <${email}>\n\n${message}`)
    window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    form.reset()
  }

  return (
    <section className="c-section c-section--alt" id="contact">
      <div className="c-container c-contact">
        <div className="c-contact__info">
          <span className="c-kicker">{t.nav.contact}</span>
          <h2 className="c-section__title">{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>

          <div className="c-contact__channels">
            <div className="c-contact__channel">
              <span className="c-contact__channel-label">{t.client.emailLabel}</span>
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
            </div>
            <a
              className="c-btn c-btn--wa"
              href={whatsappUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.whatsapp.label}
            </a>
          </div>
        </div>

        <form className="c-form" onSubmit={handleSubmit}>
          <label className="c-field">
            <span>{t.client.formName}</span>
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label className="c-field">
            <span>{t.client.formEmail}</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label className="c-field c-field--full">
            <span>{t.client.formMessage}</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder={t.client.formPlaceholder}
            />
          </label>
          <button type="submit" className="c-btn c-btn--primary c-form__submit">
            {t.client.formSend}
          </button>
          {sent && (
            <p className="c-form__note" role="status">
              {t.client.formSent}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
