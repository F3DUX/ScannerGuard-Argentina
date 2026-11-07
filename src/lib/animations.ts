import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './scroll'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animaciones de entrada y parallax para la vista activa.
 * Cada vista llama a este hook y limpia sus ScrollTriggers al desmontarse.
 */
export function usePageMotion(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    if (prefersReducedMotion()) {
      ScrollTrigger.refresh()
      return
    }

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>('[data-intro-line]', root)
      const intros = gsap.utils.toArray<HTMLElement>('[data-intro]', root)

      if (lines.length || intros.length) {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
        if (lines.length) {
          tl.from(lines, { yPercent: 112, duration: 1.15, stagger: 0.07 }, 0.05)
        }
        if (intros.length) {
          tl.from(
            intros,
            { opacity: 0, y: 22, duration: 0.9, stagger: 0.055 },
            0.22,
          )
        }
      }

      gsap.utils.toArray<HTMLElement>('[data-reveal]', root).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 26,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-photo]', root).forEach((el) => {
        const media = el.querySelector<HTMLElement>('.photo__media')
        if (!media) return
        gsap.from(media, {
          scale: 1.06,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        })
      })

      if (window.matchMedia('(min-width: 901px)').matches) {
        gsap.utils.toArray<HTMLElement>('[data-parallax]', root).forEach((el) => {
          const strength = Number(el.dataset.parallax ?? 0.05) || 0.05
          gsap.fromTo(
            el,
            { y: strength * 240 },
            {
              y: strength * -240,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.6,
              },
            },
          )
        })
      }
    }, root)

    const refresh = () => {
      if (root.isConnected) ScrollTrigger.refresh()
    }
    const raf = requestAnimationFrame(refresh)
    void document.fonts?.ready.then(refresh).catch(() => undefined)

    return () => {
      cancelAnimationFrame(raf)
      ctx.revert()
    }
  }, [rootRef])
}
