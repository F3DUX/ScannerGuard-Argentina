import { useEffect, useRef, useState } from 'react'
import { routes, site } from '../data/site'
import { setScrollLocked } from '../lib/scroll'
import { ArrowRight, Close, Mark } from './Icons'

type HeaderProps = {
  path: string
}

export function Header({ path }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [path])

  useEffect(() => {
    if (!open) return
    setScrollLocked(true)
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      setScrollLocked(false)
    }
  }, [open])

  const closeMenu = () => {
    setOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header__inner">
        <a className="brand" href="#/" aria-label="ScannerGuard Argentina, ir al inicio">
          <Mark className="brand__mark" />
          <span className="brand__lockup">
            <span className="brand__name">ScannerGuard</span>
            <span className="brand__country">Argentina</span>
          </span>
        </a>

        <nav className="header__tabs" aria-label="Secciones del sitio">
          {routes
            .filter((route) => route.id !== 'comprar')
            .map((route) => {
              const active = path === route.path
              return (
                <a
                  key={route.id}
                  className={`tab${active ? ' is-active' : ''}`}
                  href={`#${route.path}`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="tab__num">{route.num}</span>
                  <span className="tab__label">{route.label}</span>
                </a>
              )
            })}
        </nav>

        <div className="header__actions">
          <a
            className={`btn btn--buy${path === '/comprar' ? ' is-current' : ''}`}
            href="#/comprar"
            aria-current={path === '/comprar' ? 'page' : undefined}
          >
            <span>Comprar</span>
            <ArrowRight />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="menu-btn"
            aria-label="Abrir menú de secciones"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="menu" id="mobile-menu">
          <div className="menu__head">
            <span className="menu__label">Índice · ScannerGuard</span>
            <button
              ref={closeRef}
              type="button"
              className="menu__close"
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <span>Cerrar</span>
              <Close />
            </button>
          </div>

          <nav className="menu__nav" aria-label="Menú principal">
            {routes.map((route) => {
              const active = path === route.path
              return (
                <a
                  key={route.id}
                  className={`menu__link${active ? ' is-active' : ''}`}
                  href={`#${route.path}`}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="menu__num">{route.num}</span>
                  <span>{route.label}</span>
                  <ArrowRight />
                </a>
              )
            })}
          </nav>

          <div className="menu__foot">
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            <span>{site.brandLine}</span>
          </div>
        </div>
      )}
    </header>
  )
}
