import { useRef } from 'react'
import { images } from '../data/site'
import { usePageMotion } from '../lib/animations'
import { ArrowRight } from '../components/Icons'
import { PageHead } from '../components/PageHead'
import { Photo } from '../components/Photo'

const columns = [
  {
    n: 'A',
    title: 'Qué es',
    text: 'ScannerGuard monitorea una cava de vino: detecta cambios de luz y movimientos o inclinaciones que pueden afectar el reposo de las botellas. Los indicadores muestran el estado.',
  },
  {
    n: 'B',
    title: 'Qué busca resolver',
    text: 'Ayuda a estar atento a dos condiciones importantes para el vino: la luz que entra en la cava y los movimientos que pueden agitar las botellas.',
  },
  {
    n: 'C',
    title: 'Qué lo diferencia',
    text: 'Combina sensores, controlador y programación en un diseño compacto. El estado se consulta en el momento mediante los indicadores luminosos.',
  },
]

const specs = [
  ['Controlador', 'Arduino Uno'],
  ['Entrada de luz', 'Sensor LDR'],
  ['Entrada de posición', 'Sensor de inclinación KY-020'],
  ['Indicadores', 'LED verde · LED rojo'],
  ['Lógica', 'Programación cargada en el Arduino Uno'],
  ['Diseño', 'Compacto y funcional'],
  ['Comunicación', 'Indicadores luminosos en el dispositivo'],
]

const limits = [
  'No se conecta a internet ni a una aplicación móvil.',
  'No envía notificaciones al teléfono.',
  'No emite alarmas sonoras.',
  'No incorpora GPS, cámara ni inteligencia artificial.',
  'No realiza monitoreo remoto.',
]

export function Product() {
  const root = useRef<HTMLDivElement>(null)
  usePageMotion(root)

  return (
    <div className="view view--product" ref={root}>
      <div className="container">
        <PageHead
          index="02"
          label="Producto"
          lines={[
            'Un dispositivo pequeño,',
            <em key="line-2">atento a dos cambios.</em>,
          ]}
          lede="ScannerGuard reúne sensores y un controlador para monitorear la luz y el movimiento en una cava de vino. Comunica los cambios con indicadores luminosos."
          aside={
            <>
              <span className="aside__label">En síntesis</span>
              <p>Dos entradas · un controlador · dos indicadores</p>
            </>
          }
        />
      </div>

      <div className="container product-hero">
        <Photo
          src={images.wide}
          alt="Fotografía de producto de ScannerGuard"
          ratio="16 / 9"
          tag="01 · Producto"
          pendingLabel="Fotografía principal de ScannerGuard"
          label="ScannerGuard"
          note="Vista de producto · luz natural"
        />
      </div>

      <section className="product-copy container">
        {columns.map((column) => (
          <article key={column.n} data-reveal>
            <span className="product-copy__n">{column.n}</span>
            <h2>{column.title}</h2>
            <p>{column.text}</p>
          </article>
        ))}
      </section>

      <section className="specs">
        <div className="container specs__grid">
          <div className="specs__intro">
            <p className="eyebrow" data-reveal>
              Ficha técnica
            </p>
            <h2 data-reveal>
              Lo que compone
              <br />
              <em>el sistema</em>.
            </h2>
            <p data-reveal>
              Los componentes reales del proyecto, sin agregados. Cada uno
              cumple una función dentro del recorrido de la señal.
            </p>
          </div>

          <dl className="specs__table" data-reveal>
            {specs.map(([label, value]) => (
              <div className="specs__row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="scope">
        <div className="container scope__grid">
          <div className="scope__intro">
            <p className="eyebrow eyebrow--light" data-reveal>
              Alcance del producto
            </p>
            <h2 data-reveal>
              Claro en lo que hace.
              <br />
              <em>Y en lo que no.</em>
            </h2>
            <p data-reveal>
              ScannerGuard detecta cambios de luz y movimiento y los comunica
              mediante indicadores luminosos. No bloquea la luz ni estabiliza la
              cava: permite advertir cambios para que puedas revisarlos.
            </p>
          </div>

          <ul className="scope__list" data-reveal>
            {limits.map((limit) => (
              <li key={limit}>{limit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="product-cta container">
        <div className="product-cta__copy" data-reveal>
          <p className="eyebrow">Siguiente paso</p>
          <h2>
            Conocer las piezas
            <br />
            o <em>comprarlo</em>.
          </h2>
        </div>
        <div className="product-cta__actions" data-reveal>
          <a className="btn btn--primary" href="#/comprar">
            <span>Ir a compra</span>
            <ArrowRight />
          </a>
          <a className="text-link" href="#/componentes">
            Ver los cinco componentes
            <ArrowRight />
          </a>
        </div>
      </section>
    </div>
  )
}
