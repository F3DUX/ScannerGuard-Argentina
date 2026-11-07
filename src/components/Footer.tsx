import { components, routes, site } from '../data/site'
import { scrollToTop } from '../lib/scroll'
import { ArrowRight, ArrowUp, Mark, Sprig } from './Icons'

export function Footer() {
  const socials = [
    site.contact.instagram && { label: 'Instagram', href: site.contact.instagram },
    site.contact.github && { label: 'GitHub', href: site.contact.github },
  ].filter(Boolean) as { label: string; href: string }[]

  return (
    <footer className="footer">
      <Sprig className="footer__sprig" />
      <div className="container">
        <div className="footer__top">
          <a className="footer__brand" href="#/" aria-label="ScannerGuard, inicio">
            <Mark />
            <span>ScannerGuard</span>
          </a>
          <p className="footer__tagline">{site.tagline}</p>
        </div>

        <div className={`footer__grid${socials.length ? '' : ' footer__grid--nosocial'}`}>
          <div className="footer__col">
            <h3>Índice</h3>
            <ul>
              {routes.map((route) => (
                <li key={route.id}>
                  <a href={`#${route.path}`}>{route.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>Producto</h3>
            <ul>
              {components.map((component) => (
                <li key={component.id}>
                  <a href="#/componentes">
                    {component.name}
                    <ArrowRight className="footer__arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>Contacto</h3>
            <ul>
              <li>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </li>
              {site.contact.phone && (
                <li>
                  <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
                    {site.contact.phone}
                  </a>
                </li>
              )}
              {site.contact.location && <li>{site.contact.location}</li>}
              <li>
                <a href="#/comprar">Comprar ScannerGuard</a>
              </li>
            </ul>
          </div>

          {socials.length > 0 && (
            <div className="footer__col">
              <h3>Redes</h3>
              <ul>
                {socials.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer">
                      {social.label}
                      <ArrowRight className="footer__arrow" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="footer__bottom">
          <span>
            © {site.year} {site.brand}
          </span>
          <span>{site.footerNote}</span>
          <button type="button" className="footer__up" onClick={scrollToTop}>
            Volver arriba <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
