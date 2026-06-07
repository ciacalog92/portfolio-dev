import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export function ClientHeader() {
  const { locale, t, toggleLocale } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <header className={`c-header ${scrolled ? 'c-header--scrolled' : ''}`}>
      <div className="c-container c-header__inner">
        <a
          href="#top"
          className="c-logo"
          onClick={() => setMenuOpen(false)}
          aria-label="Calogero Ciaccio — home"
        >
          <span className="c-logo__mark">CC</span>
          <span className="c-logo__text">
            Calogero Ciaccio<span className="c-logo__dot">.</span>
          </span>
        </a>

        <nav className={`c-nav ${menuOpen ? 'c-nav--open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="c-header__actions">
          <button
            type="button"
            className="c-lang"
            onClick={toggleLocale}
            aria-label={locale === 'it' ? 'Switch to English' : "Passa all'italiano"}
          >
            {locale === 'it' ? 'EN' : 'IT'}
          </button>
          <a href="#contact" className="c-btn c-btn--primary c-btn--sm c-header__cta">
            {t.nav.contact}
          </a>
          <button
            type="button"
            className="c-burger"
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
