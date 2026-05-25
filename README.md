# DragonDex - Examen Final

**Nombre:** Tomas Garcés

## Descripción
DragonDex es una aplicación web de catálogo interactivo que permite explorar una colección de criaturas (dragones), ver sus detalles como tipos, habilidades y estadísticas, buscarlos por nombre y guardarlos como favoritos. Es el examen final de Ingeniería Web.

## Demo
https://tgarcesm.github.io/examen-final-front/

## Tecnologías
- React + TypeScript + Vite
- Tailwind CSS v4
- React Router DOM v7
- React Icons
- Font Awesome (CDN)
- PokéAPI

## Instalación
1. Clonar el repositorio
2. `npm install`
3. `npm run dev`

## Parte Teórica
El archivo `Parte teorica final front.pdf` contiene las respuestas y resultado de la parte teórica del examen.

## Notas
- Se limpió la caché de npm (`npm cache clean --force`) para poder correr el proyecto correctamente con la versión instalada, ya que sin esto daba errores al compilar.
- El workflow de GitHub Actions (`.github/workflows/deploy.yml`) fue tomado de un proyecto propio que ya tenía configurado el despliegue a GitHub Pages para dar una mejor entrega.
- Hay un error con el funcionamiento de GitHub Pages: la página puede aparecer en blanco al acceder. Se cambió de `BrowserRouter` a `HashRouter` para intentar solucionar problemas de enrutamiento pero sigue poniendo problema, el localhost funciona perfectamente.

## Uso de íconos

En este proyecto usamos **React Icons** para todos los íconos de la interfaz:

```tsx
import { FaHeart, FaRegHeart, FaDragon } from "react-icons/fa";

// Ejemplo de uso en un componente
<FaHeart className="text-red-500" />
```

Todos los íconos disponibles: https://react-icons.github.io/react-icons/

También tenemos **Font Awesome** cargado via CDN en `index.html`, disponible para usar con la sintaxis clásica si se necesita:

```html
<i className="fas fa-dragon"></i>
```

Todos los íconos: https://fontawesome.com/search?ic=free-collection
