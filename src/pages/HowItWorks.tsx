import { useRef } from 'react'
import { images, steps } from '../data/site'
import { usePageMotion } from '../lib/animations'
import { Mark } from '../components/Icons'
import { PageHead } from '../components/PageHead'
import { Photo } from '../components/Photo'

export function HowItWorks() {
  const root = useRef<HTMLDivElement>(null)
  usePageMotion(root)

  return (
    <div className="view view--flow" ref={root}>
      <div className="container">
        <PageHead
          index="04"
          label="Funcionamiento"
          lines={[<>Del entorno, <em>a la señal.</em></>]}
          lede="El LDR registra la luz que llega a la cava; el KY-020 detecta movimientos o inclinaciones. El Arduino Uno procesa ambas señales y los indicadores muestran el estado."
          align="center"
          aside={
            <>
              <span className="aside__label">Recorrido</span>
              <p>02 entradas · 01 procesamiento · 02 salidas</p>
            </>
          }
        />
      </div>

      <section className="flow container">
        <div className="flow__top">
          <p className="eyebrow" data-reveal>
            Diagrama de señal
          </p>
          <h2 data-reveal>
            De la lectura
            <br />
            <em>al indicador</em>.
          </h2>
        </div>

        <div className="flow__diagram" data-reveal>
          <div className="flow__col">
            <span className="flow__title">Entradas</span>
            <div className="flow__node">
              <span className="flow__node-name">LDR</span>
              <span className="flow__node-desc">Intensidad de luz</span>
            </div>
            <div className="flow__node">
              <span className="flow__node-name">KY-020</span>
              <span className="flow__node-desc">Inclinación y posición</span>
            </div>
          </div>

          <div className="flow__wire" aria-hidden="true">
            <span className="flow__pulse" />
          </div>

          <div className="flow__col flow__col--core">
            <span className="flow__title">Procesamiento</span>
            <div className="flow__node flow__node--core">
              <Mark className="flow__mark" />
              <span className="flow__node-name">Arduino Uno</span>
              <span className="flow__node-desc">
                Recibe las señales y las procesa según la programación.
              </span>
            </div>
          </div>

          <div className="flow__wire" aria-hidden="true">
            <span className="flow__pulse" />
          </div>

          <div className="flow__col">
            <span className="flow__title">Salidas</span>
            <div className="flow__node flow__node--led">
              <span className="lamp lamp--green" aria-hidden="true" />
              <span className="flow__node-name">LED verde</span>
              <span className="flow__node-desc">Estado normal</span>
            </div>
            <div className="flow__node flow__node--led">
              <span className="lamp lamp--red" aria-hidden="true" />
              <span className="flow__node-name">LED rojo</span>
              <span className="flow__node-desc">Condición de alerta</span>
            </div>
          </div>
        </div>

        <p className="flow__note" data-reveal>
              El Arduino Uno evalúa los cambios de luz y movimiento y activa el
              indicador correspondiente. La lógica de cada estado está definida
              en la programación del controlador.
        </p>
      </section>

      <section className="steps container">
        <div className="steps__head">
          <div>
            <p className="eyebrow" data-reveal>
              Paso a paso
            </p>
            <h2 data-reveal>
              Qué ocurre en
              <br />
              <em>cada etapa</em>.
            </h2>
          </div>
          <p data-reveal>
            Cinco momentos entre la lectura de los sensores y la señal luminosa
            que se ve en el dispositivo.
          </p>
        </div>

        <ol className="steps__list">
          {steps.map((step) => (
            <li key={step.n} data-reveal>
              <span className="steps__n">{step.n}</span>
              <div className="steps__title">
                <span className="steps__tag">{step.tag}</span>
                <h3>{step.title}</h3>
              </div>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="states">
        <div className="container states__grid">
          <div className="states__intro">
            <p className="eyebrow eyebrow--light" data-reveal>
              Lectura del estado
            </p>
            <h2 data-reveal>
              Dos luces,
              <br />
              dos <em>lecturas</em>.
            </h2>
            <p data-reveal>
              El estado de la cava se comunica en el propio dispositivo.
              ScannerGuard no envía notificaciones ni se conecta a internet: la
              información está donde están las botellas.
            </p>
          </div>

          <ul className="states__list" data-reveal>
            <li>
              <span className="lamp lamp--green" aria-hidden="true" />
              <div>
                <h3>LED verde</h3>
                <p>Estado normal según las condiciones programadas.</p>
              </div>
              <span className="states__tag">Normal</span>
            </li>
            <li>
              <span className="lamp lamp--red" aria-hidden="true" />
              <div>
                <h3>LED rojo</h3>
                <p>Condición de alerta según las condiciones programadas.</p>
              </div>
              <span className="states__tag">Alerta</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="detail-photo container">
        <Photo
          src={images.detail}
          alt="Detalle de los indicadores luminosos de ScannerGuard"
          ratio="16 / 9"
          tag="02 · Detalle"
          pendingLabel="Detalle de los indicadores"
          label="Indicadores luminosos"
          note="Lectura directa en el dispositivo"
        />
      </section>
    </div>
  )
}
