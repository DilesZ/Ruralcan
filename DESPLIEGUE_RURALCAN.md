# 🚀 GUÍA DE DESPLIEGUE - RURALCAN.COM

## 📋 Requisitos Previos

- Dominio comprado: ruralcan.com
- Hosting contratado (recomendado: cPanel)
- Acceso FTP o al administrador de archivos

---

## 🛒 Paso 1: Comprar Dominio y Hosting

### Opciones de Hosting Recomendadas:

| Proveedor | Precio/mes | Características |
|-----------|------------|-----------------|
| Hostinger | ~3€ | cPanel, SSL gratis |
| SiteGround | ~4€ | cPanel, soporte 24/7 |
| Bluehost | ~3€ | cPanel, WordPress |
| GoDaddy | ~5€ | cPanel, dominio incluido |

### Pasos:
1. Ve al sitio del proveedor
2. Busca "ruralcan.com"
3. Compra el dominio + hosting
4. Anota tus credenciales de acceso

---

## 📤 Paso 2: Subir Archivos al Hosting

### Método A: cPanel (Recomendado)

1. Accede a cPanel con tus credenciales
   - URL típica: `tudominio.com:2083` o `cpanel.tudominio.com`

2. Busca **"Administrador de Archivos"** o **"File Manager"**

3. Navega a la carpeta `public_html/`

4. **Elimina** el archivo `index.html` por defecto

5. Sube todos los archivos de la carpeta `dist/`:
   - Arrastra y suelta los archivos, O
   - Click en "Upload" y selecciona los archivos

6. Verifica que `index.html` esté en la raíz de `public_html/`

### Método B: FTP

1. Descarga FileZilla (gratis)
2. Configura conexión:
   - Host: ftp.tudominio.com
   - Usuario: tu_usuario
   - Contraseña: tu_contraseña
   - Puerto: 21
3. Conecta y navega a `public_html/`
4. Sube todos los archivos de `dist/`

---

## 🔧 Paso 3: Configurar Dominio

### Si usas cPanel:

1. Ve a **"Dominios"** → **"Dominios Adicionales"**
2. Asegúrate de que ruralcan.com apunte a `public_html/`

### Si usas DNS externo (Cloudflare, etc.):

1. Configura registros A:
   ```
   @     → IP_DEL_SERVIDOR
   www   → IP_DEL_SERVIDOR
   ```

---

## 🔒 Paso 4: Instalar SSL (HTTPS)

### En cPanel:

1. Busca **"SSL/TLS"** o **"Let's Encrypt"**
2. Selecciona ruralcan.com
3. Click en **"Instalar"** o **"Issue"**
4. Espera 5-10 minutos
5. Verifica: https://ruralcan.com

---

## ✅ Paso 5: Verificación

### Lista de Verificación:

- [ ] https://ruralcan.com carga correctamente
- [ ] https://ruralcan.com/#/quienes-somos/ funciona
- [ ] Todas las imágenes se ven
- [ ] El carrusel funciona
- [ ] Los enlaces del menú funcionan
- [ ] El formulario de contacto envía emails
- [ ] El banner de cookies aparece

### Pruebas de Navegación:

1. Abre https://ruralcan.com
2. Click en "¿QUIENES SOMOS?"
3. Debe cambiar a: https://ruralcan.com/#/quienes-somos/
4. Click en "TARIFAS"
5. Debe cambiar a: https://ruralcan.com/#/tarifas/

---

## 📧 Paso 6: Configurar Email

### Crear email profesional:

1. En cPanel, busca **"Cuentas de Email"**
2. Crea: `ruralcan@gmail.com` → Mejor usar `info@ruralcan.com`
3. Configura en tu teléfono/Outlook

### Configurar Formulario de Contacto:

El formulario actual usa `alert()`. Para enviar emails reales:

1. Crea un archivo PHP en tu hosting:
   ```php
   <?php
   // contacto.php
   if ($_SERVER["REQUEST_METHOD"] == "POST") {
       $nombre = $_POST['nombre'];
       $email = $_POST['email'];
       $mensaje = $_POST['mensaje'];
       
       $to = "info@ruralcan.com";
       $subject = "Nuevo mensaje de $nombre";
       $body = "De: $email\n\nMensaje:\n$mensaje";
       
       mail($to, $subject, $body);
       echo "Mensaje enviado";
   }
   ?>
   ```

2. Modifica el formulario en `Contacto.tsx` para usar fetch()

---

## 🔄 Paso 7: Actualizaciones Futuras

### Para hacer cambios:

1. Edita los archivos en tu computadora
2. Compila: `npm run build`
3. Sube la nueva carpeta `dist/` al hosting
4. ¡Listo!

### Backup:

Antes de cada actualización:
1. Descarga una copia de `public_html/`
2. Guarda como backup
3. Sube los nuevos archivos

---

## 🐛 Solución de Problemas

### Problema: Página en blanco

**Causa:** Archivos no subidos correctamente
**Solución:**
1. Verifica que `index.html` exista en `public_html/`
2. Verifica que la carpeta `assets/` exista
3. Recarga con Ctrl+F5

### Problema: Imágenes no cargan

**Causa:** URLs de imágenes incorrectas
**Solución:**
1. Las imágenes usan URLs de Unsplash (externas)
2. Si quieres imágenes propias, súbelas a `public_html/images/`
3. Actualiza las URLs en el código

### Problema: Enlaces no funcionan

**Causa:** Router hash-based
**Solución:** Normal, las URLs deben ser:
- `ruralcan.com/#/quienes-somos/` ✓
- `ruralcan.com/quienes-somos/` ✗ (sin # no funciona)

### Problema: HTTPS no funciona

**Causa:** SSL no instalado
**Solución:**
1. Instala SSL en cPanel
2. Espera 24-48 horas
3. Prueba: https://ruralcan.com

---

## 📊 Costos Estimados

| Concepto | Costo Anual |
|----------|-------------|
| Dominio (.com) | ~10-15€ |
| Hosting básico | ~36-60€ |
| SSL (Let's Encrypt) | Gratis |
| **TOTAL** | **~46-75€/año** |

---

## 📞 Contacto de Soporte

Si tienes problemas con el despliegue:
- Soporte de tu hosting (24/7)
- Documentación de cPanel: docs.cpanel.net

---

**¡Tu web estará lista en menos de 30 minutos! 🎉**
