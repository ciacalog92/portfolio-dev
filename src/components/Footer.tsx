import { useLanguage } from '../context/LanguageContext'
import { CodeLogo } from './CodeLogo'

const YEAR = new Date().getFullYear()

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          <span className="footer__year">© {YEAR}</span>{' '}
          <CodeLogo className="code-logo--footer" />
          <span className="footer__rights"> — {t.footer.rights}</span>
        </p>
        <p className="footer__meta">
          <span className="section__comment-kw">{'// '}</span>
          {t.footer.built}
        </p>
      </div>
    </footer>
  )
}
