import { useLanguage } from '../../context/LanguageContext'

const YEAR = new Date().getFullYear()

export function ClientFooter() {
  const { t } = useLanguage()

  return (
    <footer className="c-footer">
      <div className="c-container c-footer__inner">
        <p className="c-footer__copy">
          © {YEAR} Calogero Ciaccio — {t.footer.rights}
        </p>
        <p className="c-footer__meta">{t.footer.built}</p>
      </div>
    </footer>
  )
}
