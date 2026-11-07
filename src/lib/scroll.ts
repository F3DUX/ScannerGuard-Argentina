import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Scroll suave global. Devuelve una función de limpieza. */
export function initSmoothScroll(): () => void {
  if (lenis || prefersReducedMotion()) return () => {}

  const instance = new Lenis({
    duration: 1.05,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.4,
  })
  lenis = instance

  const onScroll = () => ScrollTrigger.update()
  instance.on('scroll', onScroll)

  const tick = (time: number) => instance.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(tick)
    instance.off('scroll', onScroll)
    instance.destroy()
    if (lenis === instance) lenis = null
  }
}

export function setScrollLocked(locked: boolean) {
  document.documentElement.classList.toggle('is-locked', locked)
  if (!lenis) return
  if (locked) lenis.stop()
  else lenis.start()
}

export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true, force: true })
    return
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

export function scrollToSelector(selector: string) {
  const target = document.querySelector<HTMLElement>(selector)
  if (!target) return
  if (lenis) {
    lenis.scrollTo(target, {
      offset: 0,
      duration: prefersReducedMotion() ? 0 : 1.2,
    })
    return
  }
  target.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  })
}
