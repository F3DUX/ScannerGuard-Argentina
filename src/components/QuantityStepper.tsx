import { useEffect, useState } from 'react'
import { Minus, Plus } from './Icons'

type QuantityStepperProps = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  id?: string
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  id = 'cantidad',
}: QuantityStepperProps) {
  const [draft, setDraft] = useState(String(value))

  useEffect(() => {
    setDraft(String(value))
  }, [value])

  const commit = (next: number) => {
    const safe = clamp(next, min, max)
    onChange(safe)
    setDraft(String(safe))
  }

  return (
    <div className="qty" role="group" aria-label="Cantidad de unidades">
      <button
        type="button"
        className="qty__btn"
        aria-label="Restar una unidad"
        onClick={() => commit(value - 1)}
        disabled={value <= min}
      >
        <Minus />
      </button>

      <input
        id={id}
        className="qty__input"
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        step={1}
        value={draft}
        aria-live="polite"
        onChange={(event) => {
          const raw = event.target.value
          setDraft(raw)
          const parsed = Number.parseInt(raw, 10)
          if (!Number.isNaN(parsed)) onChange(clamp(parsed, min, max))
        }}
        onBlur={() => {
          const parsed = Number.parseInt(draft, 10)
          commit(Number.isNaN(parsed) ? min : parsed)
        }}
      />

      <button
        type="button"
        className="qty__btn"
        aria-label="Sumar una unidad"
        onClick={() => commit(value + 1)}
        disabled={value >= max}
      >
        <Plus />
      </button>
    </div>
  )
}
