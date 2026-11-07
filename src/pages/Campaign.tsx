import { useRef, useState, type ReactNode, type TouchEvent } from 'react'
import { gallery } from '../data/site'
import { usePageMotion } from '../lib/animations'
import { PageHead } from '../components/PageHead'
import { Photo } from '../components/Photo'

export function Campaign() {
  const root = useRef<HTMLDivElement>(null)
  const touchStart = useRef<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  usePageMotion(root)

  const slides = [gallery.slice(0, 2), gallery.slice(2, 4), gallery.slice(4)]
  const active = slides[activeIndex]
  const lead: ReactNode[] = [
    <>
      Cada detalle, <em>una señal.</em>
    </>,
  ]

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length)
  }

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStart.current = event.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return
    const distance = event.changedTouches[0].clientX - touchStart.current
    if (Math.abs(distance) > 45) showSlide(activeIndex + (distance < 0 ? 1 : -1))
    touchStart.current = null
  }

  return (
    <div className="view view--campaign" ref={root}>
      <div className="container">
        <PageHead
          index="05"
          label="Campaña"
          lines={lead}
          align="center"
          lede="Una serie fotográfica construida alrededor del dispositivo: su material, sus sensores y la luz natural que lo rodea."
          aside={
            <>
              <span className="aside__label">Campaña 2026</span>
              <p>Fotografía de producto · luz natural · detalles</p>
            </>
          }
        />
      </div>

      <section className="campaign container" aria-label="Serie fotográfica">
        <div className="campaign-post" role="region" aria-roledescription="carrusel" aria-label="Fotos de la campaña ScannerGuard">
          <div
            className="campaign-post__image"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className={`campaign-post__pair${active.length === 1 ? ' campaign-post__pair--single' : ''}`} key={activeIndex}>
              {active.map((entry, index) => (
                <figure className="campaign-post__card" key={entry.src}>
                  <Photo
                    src={entry.src}
                    alt={entry.alt}
                    ratio="4 / 3"
                    tag={`${String(activeIndex * 2 + index + 1).padStart(2, '0')} / ${String(gallery.length).padStart(2, '0')}`}
                    pendingLabel={entry.label}
                    priority={activeIndex === 0}
                    reveal={false}
                  />
                  <figcaption>
                    <span>{entry.label}</span>
                    <span>{entry.note}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="campaign-post__controls" aria-label="Controles de la galería">
            <button
              type="button"
              className="campaign-post__arrow"
              aria-label="Foto anterior"
              onClick={() => showSlide(activeIndex - 1)}
            >
              ‹
            </button>
            <div className="campaign-post__dots" role="group" aria-label="Elegir foto">
              {slides.map((slide, index) => (
                <button
                  key={slide[0].src}
                  type="button"
                  className="campaign-post__dot"
                  aria-label={`Ver grupo ${index + 1}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  onClick={() => showSlide(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="campaign-post__arrow"
              aria-label="Foto siguiente"
              onClick={() => showSlide(activeIndex + 1)}
            >
              ›
            </button>
          </div>

          <p className="campaign-post__caption" aria-live="polite">
            Grupo {String(activeIndex + 1).padStart(2, '0')} · {String(slides.length).padStart(2, '0')} · {active.length} {active.length === 1 ? 'foto' : 'fotos'}
          </p>
        </div>

        <blockquote className="campaign-quote" data-reveal>
          <p>
            La luz cambia. La posición también.
            <br />
            <em>Los indicadores lo dicen.</em>
          </p>
          <cite>ScannerGuard · campaña</cite>
        </blockquote>

        <p className="campaign__foot" data-reveal>
          <span>Serie ScannerGuard · 2026</span>
          <span>05 imágenes · luz natural · detalle</span>
        </p>
      </section>
    </div>
  )
}
