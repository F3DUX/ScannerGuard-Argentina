import { useRef } from 'react'
import { components, images, site, unitPriceLabel } from '../data/site'
import { usePageMotion } from '../lib/animations'
import { scrollToSelector } from '../lib/scroll'
import {
  ArrowDown,
  ArrowRight,
  IconLeds,
  IconLight,
  IconTilt,
  Sprig,
} from '../components/Icons'
import { Photo } from '../components/Photo'

const tickerItems = [
  'Sensor LDR',
  'Sensor KY-020',
  'Arduino Uno',
  'LED verde',
  'LED rojo',
  'Programación',
]

const capabilities = [
  {
    n: '01',
    title: 'Control de la luz',
    text: 'El sensor LDR registra si cambia la luz que llega a la cava y envía la lectura al controlador.',
    meta: 'LDR · entrada',
    Icon: IconLight,
  },
  {
    n: '02',
    title: 'Movimiento de la cava',
    text: 'El sensor KY-020 detecta cambios de posición o inclinación que pueden alterar el reposo del vino.',
    meta: 'KY-020 · entrada',
    Icon: IconTilt,
  },
  {
    n: '03',
    title: 'Indicadores de estado',
    text: 'El LED verde y el LED rojo comunican el estado según la programación cargada en el Arduino Uno.',
    meta: 'LED · salida',
    Icon: IconLeds,
  },
]

export function Home() {
  const root = useRef<HTMLDivElement>(null)
  usePageMotion(root)

  return (
    <div className="view view--home" ref={root}>
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__intro">
            <p className="eyebrow" data-intro>
              <span className="eyebrow__num">01</span>
              <span className="eyebrow__rule" aria-hidden="true" />
              Dispositivo de detección · Arduino Uno
            </p>

            <h1 className="hero__title">
              <span className="line-mask">
                <span data-intro-line>Scanner</span>
              </span>
              <span className="line-mask">
                <span data-intro-line>
                  <em>Guard</em>
                </span>
              </span>
            </h1>

            <p className="hero__tagline" data-intro>
              Cuidá tu vino de la luz y el movimiento.
            </p>
            <p className="hero__lede" data-intro>
              {site.lede}
            </p>

            <div className="hero__actions" data-intro>
              <a className="btn btn--primary" href="#/producto">
                <span>Descubrir producto</span>
                <ArrowRight />
              </a>
              <a className="text-link" href="#/componentes">
                Ver componentes
                <ArrowRight />
              </a>
            </div>

            <ul className="hero__specs" data-intro>
              <li>
                <span>01</span> Entrada de luz
              </li>
              <li>
                <span>02</span> Movimiento de la cava
              </li>
              <li>
                <span>03</span> Indicadores LED
              </li>
            </ul>
          </div>

          <div className="hero__visual" data-intro>
            <Photo
              src={images.hero}
              alt="ScannerGuard, dispositivo de detección con sensores e indicadores luminosos"
              ratio="auto"
              tag="Vista 3/4"
              pendingLabel="Vista 3/4 de ScannerGuard"
              className="photo--fill"
              priority
              reveal={false}
            />
            <p className="hero__vertical" aria-hidden="true">
              Gabinete · sensores · indicadores
            </p>
            <button
              type="button"
              className="hero__scroll"
              onClick={() => scrollToSelector('#sistema')}
            >
              <span>Desplazar</span>
              <span className="hero__scroll-line" aria-hidden="true" />
              <ArrowDown />
            </button>
          </div>
        </div>
      </section>

      <section className="statement" id="sistema">
        <Sprig className="statement__sprig" />
        <div className="container statement__inner">
          <div>
            <p className="eyebrow eyebrow--light" data-reveal>
              El sistema
            </p>
            <h2 data-reveal>
              Dos sensores.
              <br />
              Un estado <em>claro</em>.
            </h2>
          </div>
          <div className="statement__copy">
            <p data-reveal>
              ScannerGuard supervisa la luz que llega a la cava y los movimientos
              que pueden alterar el reposo de las botellas. El Arduino Uno procesa
              las lecturas y los indicadores luminosos muestran el estado.
            </p>
            <a className="text-link text-link--light" href="#/funcionamiento" data-reveal>
              Ver cómo funciona
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
          <div className="capabilities__head">
            <p className="eyebrow" data-reveal>
              Lo que detecta
            </p>
            <h2 data-reveal>
              Tres formas
              <br />
              de estar <em>atento</em>.
            </h2>
          </div>

          <div className="cap-list">
            {capabilities.map(({ n, title, text, meta, Icon }) => (
              <a
                className="cap-row"
                href="#/componentes"
                key={n}
                data-reveal
              >
                <span className="cap-row__num">{n}</span>
                <h3 className="cap-row__title">{title}</h3>
                <p className="cap-row__text">{text}</p>
                <span className="cap-row__meta">
                  <Icon className="cap-row__icon" />
                  <span>{meta}</span>
                  <ArrowRight className="cap-row__arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="inside">
        <div className="container inside__grid">
          <div className="inside__media">
            <Photo
              src={images.exploded}
              alt="Despiece de ScannerGuard con sus cinco componentes"
              ratio="4 / 3"
              tag="Despiece"
              pendingLabel="Despiece del dispositivo"
              label="Dentro del dispositivo"
              note="Cinco componentes, una misma lógica"
            />
          </div>

          <div className="inside__copy">
            <p className="eyebrow" data-reveal>
              Composición
            </p>
            <h2 data-reveal>
              Cinco piezas.
              <br />
              Una sola <em>lógica</em>.
            </h2>
            <p data-reveal>
              Un controlador, dos sensores y dos indicadores. Cada componente
              tiene una función concreta dentro del sistema: detectar, procesar
              o comunicar.
            </p>

            <ol className="inside__list" data-reveal>
              {components.map((component) => (
                <li key={component.id}>
                  <span>{component.n}</span>
                  <span>{component.name}</span>
                  <span>{component.kind}</span>
                </li>
              ))}
            </ol>

            <a className="text-link" href="#/componentes" data-reveal>
              Conocer cada componente
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[0, 1].map((copy) => (
            <span className="ticker__group" key={copy}>
              {tickerItems.map((item) => (
                <span className="ticker__item" key={`${copy}-${item}`}>
                  {item}
                  <span className="ticker__dot" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="home-buy">
        <div className="container home-buy__grid">
          <div>
            <p className="eyebrow eyebrow--light" data-reveal>
              Compra
            </p>
            <h2 data-reveal>
              Elegí cuántas
              <br />
              unidades <em>necesitás</em>.
            </h2>
            <p data-reveal>
              Seleccioná la cantidad y coordiná el pedido de forma directa. La
              disponibilidad y el precio final se confirman al contactarnos.
            </p>
          </div>

          <div className="home-buy__panel" data-reveal>
            <span className="home-buy__label">Precio unitario</span>
            <strong className="home-buy__price">{unitPriceLabel}</strong>
            <span className="home-buy__stock">{site.commerce.availability}</span>
            <a className="btn btn--light" href="#/comprar">
              <span>Ir a compra</span>
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
