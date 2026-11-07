import { useRef, useState } from 'react'
import {
  buildOrderLink,
  images,
  site,
  subtotalLabel,
  unitPriceLabel,
} from '../data/site'
import { usePageMotion } from '../lib/animations'
import { ArrowRight } from '../components/Icons'
import { PageHead } from '../components/PageHead'
import { Photo } from '../components/Photo'
import { QuantityStepper } from '../components/QuantityStepper'

const notes = [
  {
    title: 'Sin conexión',
    text: 'No se conecta a internet ni envía notificaciones al teléfono.',
  },
  {
    title: 'Detección acotada',
    text: 'Detecta cambios de luz y movimiento en la cava; los LED verde y rojo indican el estado.',
  },
  {
    title: 'Compra coordinada',
    text: 'El precio final y la disponibilidad se confirman al contactarnos.',
  },
]

export function Buy() {
  const root = useRef<HTMLDivElement>(null)
  const [quantity, setQuantity] = useState(1)
  usePageMotion(root)

  const order = buildOrderLink(quantity)
  const units = `${quantity} ${quantity === 1 ? 'unidad' : 'unidades'}`
  const total = subtotalLabel(quantity)
  const isExternal = order.channel !== 'email'
  const consultHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    'Consulta por ScannerGuard',
  )}`
  const specs = [
    ['Controlador', 'Arduino Uno'],
    ['Entradas', 'LDR · KY-020'],
    ['Salidas', 'LED verde · rojo'],
    ['Formato', 'Compacto'],
  ]

  return (
    <div className="view view--buy" ref={root}>
      <div className="container">
        <PageHead
          index="06"
          label="Compra"
          lines={['Elegí tu', <em key="line-2">ScannerGuard.</em>]}
          lede="Un monitor compacto para ayudar a cuidar el reposo del vino frente a cambios de luz y movimiento. Elegí la cantidad y coordinamos la compra."
          aside={
            <>
              <span className="aside__label">Pedido directo</span>
              <p>Elegís cantidad · coordinamos disponibilidad y pago</p>
            </>
          }
        />
      </div>

      <section className="buy container">
        <div className="buy__media">
          <Photo
            src={images.front}
            alt="ScannerGuard, dispositivo para monitorear luz y movimiento en cavas de vino"
            ratio="4 / 5"
            tag="ScannerGuard · 01"
            pendingLabel="Fotografía principal de ScannerGuard"
            label="ScannerGuard"
            note="Unidad completa · sensores e indicadores"
          />
          <dl className="buy__specs">
            {specs.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="buy__panel">
          <span className="eyebrow">
            <span className="eyebrow__num">01</span>
            <span className="eyebrow__rule" aria-hidden="true" />
            Unidad · ScannerGuard
          </span>
          <h2 className="buy__title">
            Tu ScannerGuard,
            <br />
            <em>listo para coordinar.</em>
          </h2>
          <p className="buy__desc">
            Dispositivo de detección construido sobre Arduino Uno. Supervisa
            cambios de luz y movimiento en la cava, y comunica el estado con
            indicadores luminosos.
          </p>

          <div className="buy__price">
            <div className="buy__price-block">
              <span className="buy__label">Precio unitario</span>
              <strong className="buy__price-value">{unitPriceLabel}</strong>
            </div>
            <p className="buy__price-note">{site.commerce.priceNote}</p>
          </div>

          <div className="buy__qty">
            <div className="buy__qty-head">
              <label htmlFor="cantidad">Cantidad</label>
              <span className="buy__stock">{site.commerce.availability}</span>
            </div>
            <QuantityStepper value={quantity} onChange={setQuantity} />
          </div>

          <div className="buy__total" aria-live="polite">
            <div className="buy__total-copy">
              <span>Total</span>
              <span className="buy__units">{units}</span>
            </div>
            <strong>{total}</strong>
          </div>

          <a
            className="btn btn--order"
            href={order.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            data-channel={order.channel}
          >
            <span>Comprar ahora</span>
            <ArrowRight />
          </a>
          <p className="buy__order-note">{order.note}</p>

          <div className="buy__includes">
            <h3>La compra incluye</h3>
            <ul>
              {site.commerce.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="buy__contact">
            ¿Preferís consultar antes?{' '}
            <a href={consultHref}>Escribinos por correo</a>.
          </p>
        </div>
      </section>

      <section className="buy-notes container">
        {notes.map((note) => (
          <article key={note.title} data-reveal>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
