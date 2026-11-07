# Imágenes de ScannerGuard

## Imágenes generales

| Archivo | Uso | Contenido | Proporción original |
| --- | --- | --- | --- |
| `bosque.jpg` | Inicio, Campaña | Dispositivo sobre musgo, en el bosque | 3:2 horizontal |
| `piedra.jpg` | Producto, Funcionamiento, Campaña | Dispositivo sobre una roca, luz de atardecer | 3:2 horizontal |
| `escritorio.jpg` | Campaña | Dispositivo sobre un escritorio de madera | 3:2 horizontal |
| `nieve.jpg` | Compra, Campaña | Dispositivo sobre nieve, vista frontal | 3:2 horizontal |
| `despiece.jpg` | Inicio, Campaña | Lámina técnica con el despiece y los componentes | 4:3 |

## Componentes

Cada pestaña muestra su propia imagen, guardada en `componentes/`:

| Archivo | Componente |
| --- | --- |
| `componentes/arduino.jpg` | Arduino Uno |
| `componentes/ldr.jpg` | Sensor LDR |
| `componentes/ky020.jpg` | Sensor KY-020 |
| `componentes/led-verde.jpg` | LED verde |
| `componentes/led-rojo.jpg` | LED rojo |

Son recortes individuales de la lámina técnica. Las rutas y los textos
alternativos se editan en `src/data/site.ts`, dentro de `components`.

## Encuadres

Las fotos generales son horizontales y el diseño las recorta en formatos
verticales, cuadrados y panorámicos. Los puntos de foco están definidos en
`src/styles/pages.css`, en el bloque «Encuadres de las fotografías reales».

## Recomendaciones técnicas

- Para pantallas grandes conviene usar originales de 1600 a 2400 px.
- Mantener JPG o WebP y un peso ideal menor a 400 KB por archivo.
- Conservar luz natural lateral y fondos de madera, piedra o vegetación.
