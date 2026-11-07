import { useRef, useState, type KeyboardEvent } from 'react'
import { components } from '../data/site'
import { usePageMotion } from '../lib/animations'
import { ArrowRight } from '../components/Icons'
import { PageHead } from '../components/PageHead'
import { Photo } from '../components/Photo'

export function Components() {
  const root = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState(components[0].id)
  usePageMotion(root)

  const active = components.find((item) => item.id === activeId) ?? components[0]

  const onTabKey = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = components.length - 1
    let next = index

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      next = index === last ? 0 : index + 1
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      next = index === 0 ? last : index - 1
    } else if (event.key === 'Home') {
      next = 0
    } else if (event.key === 'End') {
      next = last
    } else {
      return
    }

    event.preventDefault()
    const target = components[next]
    setActiveId(target.id)
    document.getElementById(`tab-${target.id}`)?.focus()
  }

  return (
    <div className="view view--components" ref={root}>
      <div className="container">
        <PageHead
          index="03"
          label="Componentes"
          lines={[
            'Cinco piezas,',
            <em key="line-2">una misma lógica.</em>,
          ]}
          lede="Cada componente cumple una función concreta. Juntos forman un sistema que detecta, procesa y comunica el estado del entorno."
          aside={
            <>
              <span className="aside__label">Interactivo</span>
              <p>Elegí una pieza en el índice para ver su función.</p>
            </>
          }
        />
      </div>

      <section className="comp-section container">
        <div className="comp-tabs" role="tablist" aria-label="Componentes de ScannerGuard">
          {components.map((component, index) => (
            <button
              key={component.id}
              id={`tab-${component.id}`}
              type="button"
              role="tab"
              className="comp-tab"
              aria-selected={active.id === component.id}
              aria-controls={`panel-${component.id}`}
              tabIndex={active.id === component.id ? 0 : -1}
              onClick={() => setActiveId(component.id)}
              onKeyDown={(event) => onTabKey(event, index)}
            >
              <span className="comp-tab__n">{component.n}</span>
              <span className="comp-tab__name">{component.name}</span>
              <span className="comp-tab__kind">{component.kind}</span>
            </button>
          ))}
        </div>

        <div
          className="comp-panel"
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          tabIndex={0}
          key={active.id}
        >
          <Photo
            src={active.src}
            alt={active.alt}
            ratio="4 / 5"
            pendingLabel={active.name}
            label={active.kicker}
            note="Componente de ScannerGuard"
            reveal={false}
          />

          <div className="comp-panel__info">
            <span className="eyebrow">
              <span className="eyebrow__num">{active.n}</span>
              <span className="eyebrow__rule" aria-hidden="true" />
              {active.kind}
            </span>
            <h2>{active.name}</h2>
            <p className="comp-panel__summary">{active.summary}</p>

            <dl className="comp-panel__facts">
              <div>
                <dt>Función en el proyecto</dt>
                <dd>{active.role}</dd>
              </div>
              <div>
                <dt>Dentro del sistema</dt>
                <dd>{active.note}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="comp-foot container">
        <p className="comp-foot__note" data-reveal>
          Los cinco componentes trabajan juntos en el mismo dispositivo. Elegí
          una pestaña para ver la foto y la función de cada pieza.
        </p>
        <a className="text-link" href="#/funcionamiento" data-reveal>
          Ver el recorrido de la señal
          <ArrowRight />
        </a>
      </section>
    </div>
  )
}
