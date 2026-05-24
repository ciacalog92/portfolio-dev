import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { CodeLogo } from './CodeLogo'

export function Header() {
  const { locale, t, toggleLocale } = useLanguage()
  const { theme, toggleTheme } = useTheme()
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
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? locale === 'it'
                  ? 'Attiva tema chiaro'
                  : 'Switch to light theme'
                : locale === 'it'
                ? 'Attiva tema scuro'
                : 'Switch to dark theme'
            }
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
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
