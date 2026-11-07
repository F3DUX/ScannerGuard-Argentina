import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function Mark({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 36"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M16 1.9 29 6.7v9.1c0 8.5-6.2 14.9-13 17.4C9.2 30.7 3 24.3 3 15.8V6.7L16 1.9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M16 25.2c-.4-6 3.3-10.5 9-11.3-.5 6.2-3.8 10.2-9 11.3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M15.8 25c-4.2-.5-7-3.2-7.7-7.2 4 .4 6.7 2.3 7.7 7.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M16 25.2c.6-3.5 2.4-6.5 5.2-8.8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M15.8 25c-.8-2.9-2.3-5.1-4.5-6.8" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export function ArrowRight(props: IconProps) {
  return (
    <svg
      viewBox="0 0 20 10"
      fill="none"
      width="20"
      height="10"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M0 5h18" stroke="currentColor" strokeWidth="1.2" />
      <path d="m14 1 4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function ArrowDown(props: IconProps) {
  return (
    <svg
      viewBox="0 0 10 20"
      fill="none"
      width="10"
      height="20"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M5 0v18" stroke="currentColor" strokeWidth="1.2" />
      <path d="m1 14 4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function ArrowUp(props: IconProps) {
  return (
    <svg
      viewBox="0 0 10 20"
      fill="none"
      width="10"
      height="20"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M5 20V2" stroke="currentColor" strokeWidth="1.2" />
      <path d="m1 6 4-4 4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function Plus(props: IconProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function Minus(props: IconProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M0 7h14" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function Close(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M1 1l14 14M15 1 1 15" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

/** Rama de hojas usada como detalle gráfico. */
export function Sprig(props: IconProps) {
  return (
    <svg
      viewBox="0 0 420 560"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M210 560C205 430 208 292 250 150 274 70 306 26 350 0"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M238 386c-54-9-91-42-102-99 55 6 91 42 102 99Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M246 312c50-14 80-49 85-103-51 12-82 49-85 103Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M262 234c-48-13-80-45-87-96 49 10 80 45 87 96Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M282 168c44-16 68-50 69-99-45 14-69 50-69 99Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M309 106c-33-16-50-45-47-86 33 14 50 45 47 86Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M336 58c28-13 43-36 42-70-28 12-43 36-42 70Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M258 432c-39 4-69-14-88-50 38-4 69 14 88 50Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  )
}

export function IconLight(props: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M24 2v7M24 39v7M2 24h7M39 24h7M8.5 8.5l5 5M34.5 34.5l5 5M39.5 8.5l-5 5M13.5 34.5l-5 5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export function IconTilt(props: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M4 40h40" stroke="currentColor" strokeWidth="1.2" />
      <g transform="rotate(-18 24 26)">
        <rect
          x="14"
          y="20"
          width="20"
          height="12"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M24 20v-5" stroke="currentColor" strokeWidth="1.2" />
      </g>
      <path
        d="M36 18c2 3 3 6 3 9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />
    </svg>
  )
}

export function IconLeds(props: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="14" cy="18" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="34" cy="18" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M14 24v8M14 32h20M34 24v8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 43h36" stroke="currentColor" strokeWidth="1.2" />
      <path d="M14 4v4M34 4v4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}
