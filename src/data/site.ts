/**
 * ScannerGuard — contenido editable
 * -------------------------------------------------------------
 * Todo lo comercial (precio, disponibilidad, contacto, redes)
 * se cambia en este archivo. El diseño no necesita modificarse.
 */

export type RouteId =
  | 'inicio'
  | 'producto'
  | 'componentes'
  | 'funcionamiento'
  | 'campana'
  | 'comprar'

export type Route = {
  id: RouteId
  path: string
  label: string
  num: string
  title: string
  description: string
}

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const routes: Route[] = [
  {
    id: 'inicio',
    path: '/',
    label: 'Inicio',
    num: '01',
    title: 'ScannerGuard — Cuidado inteligente para cavas de vino',
    description:
      'ScannerGuard ayuda a cuidar las cavas de vino: detecta cambios de luz y movimiento con sensores y comunica el estado mediante indicadores LED.',
  },
  {
    id: 'producto',
    path: '/producto',
    label: 'Producto',
    num: '02',
    title: 'El producto — ScannerGuard',
    description:
      'Un dispositivo compacto para cavas de vino que detecta la entrada de luz y cambios de movimiento o inclinación.',
  },
  {
    id: 'componentes',
    path: '/componentes',
    label: 'Componentes',
    num: '03',
    title: 'Componentes — ScannerGuard',
    description:
      'Arduino Uno, sensor LDR, sensor de inclinación KY-020, LED verde y LED rojo: las cinco piezas que forman ScannerGuard.',
  },
  {
    id: 'funcionamiento',
    path: '/funcionamiento',
    label: 'Funcionamiento',
    num: '04',
    title: 'Cómo funciona — ScannerGuard',
    description:
      'Los sensores detectan cambios de luz y movimiento en la cava, y los LEDs comunican el estado según la programación.',
  },
  {
    id: 'campana',
    path: '/campana',
    label: 'Campaña',
    num: '05',
    title: 'Campaña — ScannerGuard',
    description:
      'Fotografía de producto, detalles de sensores e indicadores: la campaña visual de ScannerGuard.',
  },
  {
    id: 'comprar',
    path: '/comprar',
    label: 'Comprar',
    num: '06',
    title: 'Comprar ScannerGuard',
    description:
      'Elegí la cantidad de unidades de ScannerGuard y coordiná la compra por WhatsApp o correo.',
  },
]

export const site = {
  brand: 'ScannerGuard',
  tagline: 'Cuidá tu vino de la luz y el movimiento.',
  lede: 'Un sistema para cavas de vino que detecta la entrada de luz y movimientos que pueden alterar el reposo de las botellas.',
  brandLine: 'Más cuidado para el reposo de cada botella.',
  footerNote: 'Monitoreo de luz y movimiento para cavas de vino.',
  year: 2026,

  contact: {
    email: 'hola@scanerguard.com',
    phone: '',
    location: '',
    instagram: '',
    github: '',
  },

  commerce: {
    /**
     * Precio unitario en números, sin puntos ni símbolos.
     * Ej: 24900. null = se muestra "Precio a consultar".
     */
    unitPrice: null as number | null,
    currency: 'ARS',
    locale: 'es-AR',
    priceLabel: 'Precio a consultar',
    priceNote:
      'El precio final y la forma de pago se confirman al coordinar la compra.',
    availability: 'Disponibilidad a confirmar',

    /**
     * Número de WhatsApp con código de país y sin signos.
     * Ej: "5491122334455". Vacío = el pedido se envía por correo.
     */
    whatsapp: '',
    /**
     * Checkout futuro. Si tiene una URL, el botón de compra la abre
     * agregando ?quantity=N. Tiene prioridad sobre WhatsApp.
     */
    checkoutUrl: '',

    orderTitle: 'ScannerGuard',
    includes: [
      '1 unidad ScannerGuard armada y programada',
      'Arduino Uno como controlador principal',
      'Sensor de luz LDR y sensor de inclinación KY-020',
      'LED verde y LED rojo como indicadores de estado',
    ],
  },
}

export const formatPrice = (value: number) =>
  new Intl.NumberFormat(site.commerce.locale, {
    style: 'currency',
    currency: site.commerce.currency,
    maximumFractionDigits: 0,
  }).format(value)

export const unitPriceLabel =
  site.commerce.unitPrice === null
    ? site.commerce.priceLabel
    : formatPrice(site.commerce.unitPrice)

export const subtotalLabel = (quantity: number) =>
  site.commerce.unitPrice === null
    ? 'A confirmar'
    : formatPrice(site.commerce.unitPrice * quantity)

export type OrderChannel = 'checkout' | 'whatsapp' | 'email'

export type OrderLink = {
  href: string
  channel: OrderChannel
  note: string
}

/** Construye el enlace de pedido con la cantidad elegida. */
export function buildOrderLink(quantity: number): OrderLink {
  const units = `${quantity} ${quantity === 1 ? 'unidad' : 'unidades'}`
  const total =
    site.commerce.unitPrice === null
      ? null
      : formatPrice(site.commerce.unitPrice * quantity)
  const detail = total ? ` Total: ${total}.` : ''
  const message = `Hola, quiero comprar ${units} de ${site.commerce.orderTitle}.${detail}`

  if (site.commerce.checkoutUrl) {
    const base = site.commerce.checkoutUrl
    const separator = base.includes('?') ? '&' : '?'
    return {
      href: `${base}${separator}quantity=${quantity}`,
      channel: 'checkout',
      note: 'Se abre el checkout con la cantidad elegida.',
    }
  }

  const number = site.commerce.whatsapp.replace(/\D/g, '')
  if (number) {
    return {
      href: `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      channel: 'whatsapp',
      note: 'Se abre WhatsApp con el pedido listo para enviar.',
    }
  }

  return {
    href: `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Pedido ScannerGuard · ${units}`,
    )}&body=${encodeURIComponent(`${message}\n\nQuedo atento/a a la disponibilidad.`)}`,
    channel: 'email',
    note: 'Se abre tu correo con el pedido listo para enviar.',
  }
}

/* ------------------------------------------------------------------ */
/* Componentes                                                         */
/* ------------------------------------------------------------------ */

export type ComponentEntry = {
  id: string
  n: string
  name: string
  kind: 'Controlador' | 'Entrada' | 'Salida'
  kicker: string
  summary: string
  role: string
  note: string
  src: string
  alt: string
}

export const components: ComponentEntry[] = [
  {
    id: 'arduino',
    n: '01',
    name: 'Arduino Uno',
    kind: 'Controlador',
    kicker: 'El centro del sistema',
    summary:
      'Recibe las señales de los sensores, procesa la información y determina qué indicador luminoso debe activarse.',
    role: 'Procesar las entradas y controlar las salidas.',
    note: 'Coordina todas las lecturas y decide el estado que se muestra.',
    src: publicAsset('/images/componentes/arduino.jpg'),
    alt: 'Fotografía del controlador Arduino Uno',
  },
  {
    id: 'ldr',
    n: '02',
    name: 'Sensor LDR',
    kind: 'Entrada',
    kicker: 'Lectura de luz',
    summary:
      'Detecta cambios en la intensidad de luz que llega a la cava. Es una fotorresistencia: su resistencia varía según la luz que recibe.',
    role: 'Advertir variaciones de luz en la cava.',
    note: 'La lectura de luz es una de las dos entradas que evalúa el controlador.',
    src: publicAsset('/images/componentes/ldr.jpg'),
    alt: 'Fotografía del sensor de luz LDR',
  },
  {
    id: 'ky020',
    n: '03',
    name: 'Sensor KY-020',
    kind: 'Entrada',
    kicker: 'Lectura de posición',
    summary:
      'Detecta inclinaciones y movimientos del dispositivo que pueden indicar que la cava fue movida o golpeada.',
    role: 'Advertir movimientos o inclinaciones de la cava.',
    note: 'Complementa al LDR y ayuda a cuidar el reposo de las botellas.',
    src: publicAsset('/images/componentes/ky020.jpg'),
    alt: 'Fotografía del sensor de inclinación KY-020',
  },
  {
    id: 'led-verde',
    n: '04',
    name: 'LED verde',
    kind: 'Salida',
    kicker: 'Estado normal',
    summary:
      'Indica el estado normal según las condiciones programadas. Se enciende cuando las lecturas coinciden con lo esperado.',
    role: 'Comunicar que todo está en orden.',
    note: 'El estado se lee en el propio dispositivo, sin pantallas.',
    src: publicAsset('/images/componentes/led-verde.jpg'),
    alt: 'Fotografía del LED verde indicador',
  },
  {
    id: 'led-rojo',
    n: '05',
    name: 'LED rojo',
    kind: 'Salida',
    kicker: 'Condición de alerta',
    summary:
      'Indica una condición de alerta según las condiciones programadas. Se enciende cuando las lecturas se apartan de lo esperado.',
    role: 'Comunicar una condición de alerta.',
    note: 'Su lógica de encendido está definida en el código del Arduino Uno.',
    src: publicAsset('/images/componentes/led-rojo.jpg'),
    alt: 'Fotografía del LED rojo indicador',
  },
]

/* ------------------------------------------------------------------ */
/* Funcionamiento                                                      */
/* ------------------------------------------------------------------ */

export const steps = [
  {
    n: '01',
    title: 'Supervisión',
    text: 'Los sensores supervisan la luz y el movimiento alrededor de las botellas.',
    tag: 'Sensores',
  },
  {
    n: '02',
    title: 'Iluminación',
    text: 'El sensor LDR detecta si cambia la luz que llega a la cava.',
    tag: 'LDR',
  },
  {
    n: '03',
    title: 'Inclinación',
    text: 'El sensor KY-020 detecta movimientos o inclinaciones de la cava.',
    tag: 'KY-020',
  },
  {
    n: '04',
    title: 'Procesamiento',
    text: 'El Arduino Uno recibe las señales y las procesa de acuerdo con la programación.',
    tag: 'Arduino Uno',
  },
  {
    n: '05',
    title: 'Estado',
    text: 'Los LEDs comunican el estado: verde para normal, rojo para alerta.',
    tag: 'LED verde · LED rojo',
  },
]

/* ------------------------------------------------------------------ */
/* Campaña                                                             */
/* ------------------------------------------------------------------ */

export type GalleryEntry = {
  src: string
  alt: string
  label: string
  note: string
  ratio: string
  area: 'a' | 'b' | 'c' | 'd' | 'e'
  parallax: number
}

export const gallery: GalleryEntry[] = [
  {
    src: publicAsset('/images/bosque.jpg'),
    alt: 'ScannerGuard sobre musgo en un bosque',
    label: 'Bosque',
    note: 'Musgo, sombra y luz filtrada',
    ratio: '4 / 5',
    area: 'a',
    parallax: 0.05,
  },
  {
    src: publicAsset('/images/piedra.jpg'),
    alt: 'ScannerGuard sobre una roca durante la hora dorada',
    label: 'Hora dorada',
    note: 'Luz cálida sobre la piedra',
    ratio: '1 / 1',
    area: 'b',
    parallax: 0.09,
  },
  {
    src: publicAsset('/images/despiece.jpg'),
    alt: 'Lámina técnica del despiece de ScannerGuard',
    label: 'Despiece',
    note: 'Lámina técnica · cinco componentes',
    ratio: '4 / 3',
    area: 'c',
    parallax: 0.03,
  },
  {
    src: publicAsset('/images/nieve.jpg'),
    alt: 'ScannerGuard sobre nieve',
    label: 'Invierno',
    note: 'El dispositivo a la intemperie',
    ratio: '3 / 4',
    area: 'd',
    parallax: 0.07,
  },
  {
    src: publicAsset('/images/escritorio.jpg'),
    alt: 'ScannerGuard sobre un escritorio de madera',
    label: 'Escritorio',
    note: 'Contexto de uso y escala',
    ratio: '4 / 3',
    area: 'e',
    parallax: 0.04,
  },
]

/* ------------------------------------------------------------------ */
/* Imágenes                                                            */
/* ------------------------------------------------------------------ */

/** Ver public/images/README.md para editar las fotografías. */
export const images = {
  hero: publicAsset('/images/bosque.jpg'),
  front: publicAsset('/images/nieve.jpg'),
  detail: publicAsset('/images/piedra.jpg'),
  context: publicAsset('/images/escritorio.jpg'),
  wide: publicAsset('/images/piedra.jpg'),
  exploded: publicAsset('/images/despiece.jpg'),
}
