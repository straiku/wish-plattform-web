# WishPlattform Web – Guía de Migración y Estructura (Next.js App Router)

## 1. Introducción

Esta guía explica cómo está organizado el proyecto tras migrar de Vite a Next.js (App Router), cómo crear rutas (incluyendo rutas dinámicas), cómo navegar entre páginas y las mejores prácticas para el equipo.

---

## 2. Estructura recomendada de carpetas

```txt
src/
  app/
    layout.tsx         // Layout global
    page.tsx           // Página principal ("/")
    globals.css        // Estilos globales
    [route]/           // Carpeta para cada ruta (ej: dashboard, profile, etc.)
      page.tsx         // Página de la ruta
      layout.tsx       // Layout específico de la ruta (opcional)
      loading.tsx      // Estado de carga (opcional)
      error.tsx        // Manejo de errores (opcional)
      components/      // Componentes específicos de la ruta
      styles/          // Estilos específicos de la ruta
  components/          // Componentes reutilizables globales
  features/            // Módulos de dominio (auth, user, etc.)
  hooks/               // Custom hooks
  lib/                 // Utilidades, helpers
  assets/              // Imágenes, fuentes, etc.
  styles/              // Otros estilos globales
  config/              // Configuraciones
  types/               // Tipos TypeScript globales
  logic/               // Lógica de negocio compartida
public/                // Archivos estáticos (imágenes, favicon, etc.)
```

---

## 3. Rutas en Next.js (incluyendo rutas dinámicas)

### Rutas estáticas

Cada carpeta dentro de `app/` representa una ruta. Ejemplo:

- `app/about/page.tsx` → `/about`
- `app/contact/page.tsx` → `/contact`

### Rutas dinámicas y anidadas

Para rutas como `/user/[idUser]/post/[idPost]`:

```txt
app/
  user/
    [idUser]/
      post/
        [idPost]/
          page.tsx   // Ruta: /user/123/post/456
```

Accede a los parámetros dinámicos con el hook `useParams`:

```tsx
import { useParams } from 'next/navigation'

export default function PostPage() {
  const params = useParams()
  // params.idUser y params.idPost
  return (
    <div>
      Usuario: {params.idUser}, Post: {params.idPost}
    </div>
  )
}
```

Más info: [Rutas dinámicas Next.js](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

---

## 4. Navegación entre páginas

Usa el componente `Link` de Next.js para navegar (no uses `react-router-dom`). Ejemplo:

```tsx
import Link from 'next/link'

export default function Example() {
  return (
    <div>
      <Link href="/user/123/post/456">Ir al post 456 del usuario 123</Link>
      {/* O rutas dinámicas */}
      <Link href={`/user/${idUser}/post/${idPost}`}>Ver post</Link>
    </div>
  )
}
```

Para navegación programática, usa el hook `useRouter`:

```tsx
import { useRouter } from 'next/navigation'

const router = useRouter()
router.push(`/user/${idUser}/post/${idPost}`)
```

---

## 5. Buenas prácticas

- Todas las rutas y páginas deben estar en `src/app/`.
- Componentes globales en `src/components/`.
- Hooks personalizados en `src/hooks/`.
- Módulos de dominio en `src/features/`.
- Estilos globales en `src/app/globals.css`.
- Imágenes y fuentes en `src/assets/` o `public/`.
- Configuraciones en `src/config/`.
- Tipos TypeScript en `src/types/`.
- Utilidades en `src/lib/` o `src/logic`.

---

## 6. Migración desde Vite

- Se eliminaron dependencias y configuración de Vite y React Router.
- El punto de entrada es gestionado por Next.js (`src/app/layout.tsx` y `src/app/page.tsx`).
- Scripts de desarrollo, build y start usan Next.js (`next dev`, `next build`, `next start`).
- Variables de entorno deben usar el prefijo `NEXT_PUBLIC_` para ser accesibles en el cliente.
- El archivo `src/main.tsx` ya no se usa.

---

## 7. Comandos útiles

- `npm run dev` – Servidor de desarrollo Next.js
- `npm run build` – Compila la app para producción
- `npm run start` – Sirve la app compilada
- `npm run lint` – Linting del código
- `npm run server` – Mock API con json-server
- `npm run both` – Next.js y mock server en paralelo

---

## 8. Convenciones de commits

Estructura recomendada:

```txt
<feat/refactor/fix/bug>(<ubicacionGeneral>): <mensaje>
```

Ejemplo:

- `feat(auth): add login page`
- `refactor(lib): update api helper for Next.js`

---

## 9. Recursos

- [Documentación oficial Next.js](https://nextjs.org/docs)
- [Convenciones App Router](https://nextjs.org/docs/app/building-your-application/routing)
- [Guía de migración desde Vite](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router)

---

## 10. Notas finales

- Si tienes dudas sobre la estructura o migración, consulta este archivo o pregunta al equipo.
- Mantén el código limpio y sigue las convenciones para facilitar la colaboración.
- Si agregas nuevas rutas, componentes o módulos, sigue la estructura propuesta.

¡Feliz desarrollo! 🚀
