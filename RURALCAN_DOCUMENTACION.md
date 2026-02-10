# RURALCAN - DOCUMENTACIÓN COMPLETA DEL PROYECTO

## 📋 Índice
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Instalación y Configuración](#instalación-y-configuración)
4. [Explicación de Componentes](#explicación-de-componentes)
5. [Páginas del Sitio](#páginas-del-sitio)
6. [Configuración para Producción](#configuración-para-producción)
7. [Despliegue en Hosting](#despliegue-en-hosting)
8. [Personalización](#personalización)

---

## 📁 Estructura del Proyecto

```
/mnt/okcomputer/output/app/
├── public/                    # Archivos estáticos
│   ├── _redirects            # Configuración de redirecciones
│   └── images/               # Imágenes del sitio
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Header.tsx       # Barra superior con contacto
│   │   ├── Navbar.tsx       # Menú de navegación
│   │   ├── PineBorder.tsx   # Decoración de pinos
│   │   ├── Footer.tsx       # Pie de página
│   │   ├── CookieBanner.tsx # Banner de cookies
│   │   └── ScrollToTop.tsx  # Botón volver arriba
│   ├── pages/               # Páginas del sitio
│   │   ├── Home.tsx         # Página principal
│   │   ├── QuienesSomos.tsx
│   │   ├── HotelCanino.tsx
│   │   ├── Adiestramiento.tsx
│   │   ├── Tarifas.tsx
│   │   ├── Contacto.tsx
│   │   ├── ReservaOnline.tsx
│   │   ├── Recuperacion.tsx
│   │   ├── Charlas.tsx
│   │   ├── Prensa.tsx
│   │   ├── QueLlevar.tsx
│   │   ├── PoliticaPrivacidad.tsx
│   │   ├── PoliticaCookies.tsx
│   │   └── MasInfoCookies.tsx
│   ├── App.tsx              # Componente principal con router
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── index.html               # HTML principal
├── package.json             # Dependencias
├── vite.config.ts           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind
└── tsconfig.json            # Configuración de TypeScript
```

---

## 🛠 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 18.x | Framework de UI |
| TypeScript | 5.x | Tipado estático |
| Vite | 5.x | Build tool y dev server |
| Tailwind CSS | 3.x | Framework CSS |
| Lucide React | Latest | Iconos SVG |

---

## ⚙️ Instalación y Configuración

### 1. Clonar/Descargar el Proyecto

```bash
cd /mnt/okcomputer/output/app
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

### 4. Compilar para Producción

```bash
npm run build
```

Los archivos compilados se generan en la carpeta `dist/`

---

## 📦 Explicación de Componentes

### 1. App.tsx - Router Principal

```typescript
// Sistema de enrutamiento basado en hash (#/ruta)
// Esto permite que funcione en hosting estático sin configuración del servidor

const [currentPath, setCurrentPath] = useState('/');

// Escucha cambios en el hash de la URL
useEffect(() => {
  const hash = window.location.hash.slice(1) || '/';
  setCurrentPath(hash);
}, []);

// Renderiza la página correspondiente según la ruta
const renderPage = () => {
  switch (currentPath) {
    case '/': return <Home />;
    case '/quienes-somos/': return <QuienesSomos />;
    // ... más rutas
  }
};
```

**¿Por qué hash-based routing?**
- Funciona en cualquier hosting estático (GitHub Pages, Netlify, etc.)
- No requiere configuración del servidor
- Las URLs son del tipo: `ruralcan.com/#/quienes-somos/`

---

### 2. Header.tsx

Barra superior con:
- Email de contacto (ruralcan@gmail.com)
- Iconos de redes sociales (Facebook, Instagram)
- Teléfono (606616861)

**Colores:**
- Fondo: `#8bc34a` (verde claro)
- Texto: `white`

---

### 3. Navbar.tsx

Menú de navegación principal con:
- Logo SVG personalizado (montaña + perro)
- Enlaces a todas las páginas
- Botón "RESERVA ON-LINE"
- Menú móvil responsive

**Características:**
- Se fija al hacer scroll (sticky header)
- Resalta la página activa
- Menú hamburguesa en móvil

**Colores:**
- Fondo: `#4a7c59` (verde oscuro)
- Texto activo: `#8bc34a` (verde claro)

---

### 4. PineBorder.tsx

Decoración de pinos verdes entre el navbar y el contenido.
Usa SVG para dibujar una fila de pinos.

---

### 5. Footer.tsx

Pie de página con:
- Descripción de la empresa
- Enlaces rápidos
- Copyright

---

### 6. CookieBanner.tsx

Banner de cookies que:
- Se muestra solo si no se ha aceptado
- Guarda preferencia en localStorage
- Enlaces a políticas de cookies

---

### 7. ScrollToTop.tsx

Botón flotante que aparece al hacer scroll.
Al hacer clic, vuelve al inicio de la página.

---

## 📄 Páginas del Sitio

### Home.tsx
Página principal con:
1. **Carrusel de imágenes** - 5 fotos de perros con autoplay (5s)
2. **Sección de video** - YouTube embed
3. **Tarjetas de contenido** - 6 tarjetas con efecto hover
4. **Horario** - Horarios de atención
5. **Contacto** - Email, teléfono, redes sociales

### QuienesSomos.tsx
Información sobre la empresa, instalaciones y equipo.

### HotelCanino.tsx
Descripción del servicio de hotel canino con características y precios.

### Adiestramiento.tsx
Servicios de adiestramiento: básico y avanzado.

### Tarifas.tsx
Tabla de precios con 3 planes:
- Estancia Básica: 15€/día
- Estancia Premium: 22€/día
- Adiestramiento: 35€/sesión

### Contacto.tsx
Formulario de contacto + información de contacto.

### ReservaOnline.tsx
Formulario completo para hacer reservas.

### Recuperacion.tsx
Servicios de cuidados especiales para perros convalecientes.

### Charlas.tsx
Información sobre charlas y talleres educativos.

### Prensa.tsx
Apariciones en medios de comunicación.

### QueLlevar.tsx
Lista de cosas necesarias para la estancia.

### PoliticaPrivacidad.tsx
Página legal de política de privacidad.

### PoliticaCookies.tsx
Página legal sobre uso de cookies.

### MasInfoCookies.tsx
Información detallada sobre cookies.

---

## 🎨 Sistema de Colores

```css
/* Colores principales */
--color-primary: #4a7c59;      /* Verde oscuro - Navbar, Footer */
--color-secondary: #8bc34a;     /* Verde claro - Header, acentos */
--color-background: #f5f5dc;    /* Beige - Fondo general */
--color-text: #1a1a1a;          /* Negro - Texto principal */
--color-white: #ffffff;         /* Blanco - Texto sobre fondos oscuros */
```

---

## 🚀 Configuración para Producción (ruralcan.com)

### Paso 1: Actualizar vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Para dominio raíz
})
```

### Paso 2: Compilar

```bash
cd /mnt/okcomputer/output/app
npm run build
```

### Paso 3: Contenido de la carpeta dist/

Después de compilar, la carpeta `dist/` contiene:
- `index.html` - Página principal
- `assets/` - CSS, JS, imágenes optimizadas
- `_redirects` - Configuración de redirecciones

---

## 🌐 Despliegue en Hosting

### Opción 1: cPanel (Hosting Compartido)

1. Comprar dominio: ruralcan.com
2. Comprar hosting con cPanel
3. Acceder a cPanel → Administrador de Archivos
4. Subir contenido de `dist/` a `public_html/`
5. Listo!

### Opción 2: Netlify (Gratis)

1. Crear cuenta en netlify.com
2. Drag & drop la carpeta `dist/`
3. Configurar dominio personalizado
4. Listo!

### Opción 3: Vercel (Gratis)

1. Crear cuenta en vercel.com
2. Importar proyecto
3. Configurar dominio
4. Listo!

### Opción 4: GitHub Pages (Gratis)

1. Subir código a GitHub
2. Activar GitHub Pages
3. Configurar dominio personalizado
4. Listo!

---

## ✏️ Personalización

### Cambiar Imágenes del Carrusel

Editar `src/pages/Home.tsx`:

```typescript
const slides = [
  { id: 1, image: 'URL_DE_TU_IMAGEN', alt: 'Descripción' },
  // ...
];
```

### Cambiar Colores

Editar `src/index.css`:

```css
:root {
  --color-primary: #TU_COLOR;      /* Verde oscuro */
  --color-secondary: #TU_COLOR;     /* Verde claro */
}
```

### Cambiar Información de Contacto

Editar `src/components/Header.tsx`:
- Email
- Teléfono
- Redes sociales

### Cambiar Tarifas

Editar `src/pages/Tarifas.tsx`:

```typescript
const planes = [
  { nombre: 'Básico', precio: '15€', ... },
  // ...
];
```

---

## 🔧 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Compilar producción
npm run build

# Vista previa de producción
npm run preview

# Linting
npm run lint
```

---

## 📞 Soporte

Para cualquier duda o modificación:
- Email: ruralcan@gmail.com
- Teléfono: 606616861

---

## 📄 Licencia

© Ruralcan, Marca Registrada © 2021 - Todos los derechos reservados

---

**Última actualización:** 2024
**Versión:** 1.0.0
