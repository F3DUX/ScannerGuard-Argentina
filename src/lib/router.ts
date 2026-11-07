import { useEffect, useState } from 'react'
import { routes } from '../data/site'

export function getPath(): string {
  if (typeof window === 'undefined') return '/'
  const raw = window.location.hash.replace(/^#/, '').split('?')[0]
  if (!raw || raw === '/') return '/'
  const clean = raw.replace(/\/+$/, '')
  return clean || '/'
}

export function useRoutePath(): string {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const onHashChange = () => setPath(getPath())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return path
}

export function getRoute(path: string) {
  return routes.find((route) => route.path === path) ?? routes[0]
}

export const toHref = (path: string) => `#${path}`
