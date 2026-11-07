import { useState, type CSSProperties, type ReactNode } from 'react'
import { Mark, Sprig } from './Icons'

type PhotoProps = {
  src?: string
  alt: string
  ratio?: string
  label?: string
  note?: string
  tag?: string
  pendingLabel?: string
  className?: string
  priority?: boolean
  reveal?: boolean
  children?: ReactNode
}

/**
 * Marco fotográfico editorial.
 * Si la fotografía todavía no existe, muestra un placeholder de luz natural
 * con el nombre del archivo esperado (ver public/images/README.md).
 */
export function Photo({
  src,
  alt,
  ratio = '4 / 3',
  label,
  note,
  tag,
  pendingLabel = 'Fotografía de producto',
  className,
  priority = false,
  reveal = true,
  children,
}: PhotoProps) {
  const [failed, setFailed] = useState(!src)
  const [loaded, setLoaded] = useState(false)
  const fileName = src?.replace(/^\//, '') ?? 'fotografía pendiente'

  const style = { '--ratio': ratio } as CSSProperties

  return (
    <figure
      className={['photo', className].filter(Boolean).join(' ')}
      data-photo=""
      data-reveal={reveal ? '' : undefined}
    >
      <div className="photo__frame" style={style}>
        <div className="photo__media">
          <div className="photo__fallback" aria-hidden="true">
            <span className="photo__glow" />
            <span className="photo__leafshade" />
            <Sprig className="photo__sprig" />
            <Sprig className="photo__sprig photo__sprig--alt" />
            <span className="photo__horizon" />
            <span className="photo__vignette" />
            <span className="photo__corner photo__corner--tl" />
            <span className="photo__corner photo__corner--tr" />
            <span className="photo__corner photo__corner--bl" />
            <span className="photo__corner photo__corner--br" />
            <span className="photo__pending">
              <Mark className="photo__pending-mark" />
              <span className="photo__pending-label">{pendingLabel}</span>
              <span className="photo__pending-file">{fileName}</span>
            </span>
          </div>

          {!failed && src && (
            <img
              src={src}
              alt={alt}
              className={loaded ? 'is-loaded' : undefined}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
            />
          )}
        </div>

        {tag && <span className="photo__tag">{tag}</span>}
        {children}
      </div>

      {(label || note) && (
        <figcaption className="photo__caption">
          {label && <span className="photo__caption-label">{label}</span>}
          {note && <span className="photo__caption-note">{note}</span>}
        </figcaption>
      )}
    </figure>
  )
}
