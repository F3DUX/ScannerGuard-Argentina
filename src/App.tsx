import { useEffect, useLayoutEffect, useRef } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { getRoute, useRoutePath } from './lib/router'
import { initSmoothScroll, scrollToTop } from './lib/scroll'
import { Buy } from './pages/Buy'
import { Campaign } from './pages/Campaign'
import { Components } from './pages/Components'
import { Home } from './pages/Home'
import { HowItWorks } from './pages/HowItWorks'
import { Product } from './pages/Product'

const pages = {
  inicio: Home,
  producto: Product,
  componentes: Components,
  funcionamiento: HowItWorks,
  campana: Campaign,
  comprar: Buy,
}

export default function App() {
  const path = useRoutePath()
  const route = getRoute(path)
  const mainRef = useRef<HTMLElement>(null)
  const Page = pages[route.id]

  useEffect(() => initSmoothScroll(), [])

  useLayoutEffect(() => {
    scrollToTop()
  }, [path])

  useEffect(() => {
    document.title = route.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', route.description)
  }, [route])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a
        className="skip-link"
        href="#contenido"
        onClick={(event) => {
          event.preventDefault()
          mainRef.current?.focus()
        }}
      >
        Saltar al contenido
      </a>

      <Header path={path} />

      <main id="contenido" className="main" ref={mainRef} tabIndex={-1}>
        <div className="page" key={route.id}>
          <Page />
        </div>
      </main>

      <Footer />

      <p className="sr-only" aria-live="polite">
        {route.label}
      </p>
    </>
  )
}
