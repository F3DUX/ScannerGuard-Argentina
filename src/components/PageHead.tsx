import type { ReactNode } from 'react'

type PageHeadProps = {
  index: string
  label: string
  lines: ReactNode[]
  lede?: ReactNode
  aside?: ReactNode
  align?: 'left' | 'right' | 'center'
}

export function PageHead({
  index,
  label,
  lines,
  lede,
  aside,
  align = 'left',
}: PageHeadProps) {
  return (
    <header className={`page-head page-head--${align}`}>
      <div className="page-head__top" data-intro>
        <p className="eyebrow">
          <span className="eyebrow__num">{index}</span>
          <span className="eyebrow__rule" aria-hidden="true" />
          {label}
        </p>
        {aside && <div className="page-head__aside">{aside}</div>}
      </div>

      <h1 className="page-head__title">
        {lines.map((line, i) => (
          <span className="line-mask" key={i}>
            <span data-intro-line>{line}</span>
          </span>
        ))}
      </h1>

      {lede && (
        <p className="page-head__lede" data-intro>
          {lede}
        </p>
      )}
    </header>
  )
}
