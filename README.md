# 🐕 RURALCAN - Web Completa

Réplica idéntica de ruralcan.com con navegación funcional y todas las páginas.

---

## 📦 Archivos Incluidos

| Archivo | Descripción |
|---------|-------------|
| `RURALCAN_DOCUMENTACION.md` | Documentación completa del código |
| `DESPLIEGUE_RURALCAN.md` | Guía paso a paso para subir al hosting |
| `RURALCAN_PRODUCCION.tar.gz` | Archivos compilados listos para subir |
| `PREPARAR_PRODUCCION.sh` | Script para recompilar |

---

## 🚀 Despliegue Rápido (3 pasos)

### 1. Comprar Dominio y Hosting
- Dominio: **ruralcan.com** (~10-15€/año)
- Hosting con cPanel: **Hostinger, SiteGround, etc.** (~3-5€/mes)

### 2. Subir Archivos
1. Descomprime `RURALCAN_PRODUCCION.tar.gz`
2. Accede a cPanel → Administrador de Archivos
3. Sube todo el contenido a `public_html/`

### 3. Configurar SSL
- En cPanel, busca "Let's Encrypt" o "SSL"
- Instala certificado para ruralcan.com
- ¡Listo! Tu web estará en https://ruralcan.com

---

## 📁 Estructura de Archivos de Producción

```
PRODUCCION_RURALCAN/
├── index.html          # Página principal
├── assets/
│   ├── index-XXX.css   # Estilos
│   └── index-XXX.js    # JavaScript
├── images/             # Imágenes (vacío, usa Unsplash)
└── _redirects          # Configuración de redirecciones
```

---

## 🌐 URLs de la Web

| Página | URL |
|--------|-----|
| Inicio | https://ruralcan.com/#/ |
| Quienes Somos | https://ruralcan.com/#/quienes-somos/ |
| Hotel Canino | https://ruralcan.com/#/residencia/ |
| Adiestramiento | https://ruralcan.com/#/adiestramiento/ |
| Tarifas | https://ruralcan.com/#/tarifas/ |
| Contacto | https://ruralcan.com/#/contacto/ |
| Reserva | https://ruralcan.com/#/reserva-online/ |

---

## ✏️ Personalización

### Cambiar Imágenes
Edita `src/pages/Home.tsx` y cambia las URLs de Unsplash por tus propias imágenes.

### Cambiar Colores
Edita `src/index.css` y modifica las variables de color.

### Cambiar Textos
Edita los archivos en `src/pages/` para modificar el contenido.

---

## 💰 Costos

| Concepto | Precio |
|----------|--------|
| Dominio .com | ~10-15€/año |
| Hosting básico | ~36-60€/año |
| **Total** | **~46-75€/año** |

---

## 📞 Soporte

Para más detalles, lee:
- `RURALCAN_DOCUMENTACION.md` - Documentación técnica completa
- `DESPLIEGUE_RURALCAN.md` - Guía de despliegue detallada

---

**¡Tu web estará lista en menos de 30 minutos! 🎉**
