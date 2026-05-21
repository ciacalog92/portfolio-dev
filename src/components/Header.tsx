import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { CodeLogo } from './CodeLogo'

export function Header() {
  const { locale, t, toggleLocale } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navItems = [
    { id: 'services', index: '01', label: t.nav.services },
    { id: 'projects', index: '02', label: t.nav.projects },
    { id: 'about', index: '03', label: t.nav.about },
    { id: 'contact', index: '04', label: t.nav.contact },
  ]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a
          href="#"
          className="header__logo"
          onClick={() => setMenuOpen(false)}
          aria-label="Calogero Ciaccio — home"
        >
          <CodeLogo variant="compact" className="header__logo-mark" />
          <CodeLogo className="header__logo-text" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="nav-link__index">{item.index}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLocale}
            aria-label={locale === 'it' ? 'Switch to English' : 'Passa all\'italiano'}
          >
            {locale === 'it' ? 'EN' : 'IT'}
          </button>
          <a href="#contact" className="btn btn--sm btn--primary header__cta">
            {t.nav.contact}
          </a>
          <button
            type="button"
            className="header__burger"
            aria-expanded={menuOpen}
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
