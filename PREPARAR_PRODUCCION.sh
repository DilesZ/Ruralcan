#!/bin/bash
# Script para preparar RuralCan para producción
# Uso: bash PREPARAR_PRODUCCION.sh

echo "🚀 Preparando RuralCan para producción..."
echo ""

# Navegar al directorio de la app
cd /mnt/okcomputer/output/app

echo "📦 Instalando dependencias..."
npm install

echo ""
echo "🔨 Compilando para producción..."
npm run build

echo ""
echo "✅ Compilación completada!"
echo ""

# Crear carpeta de producción
mkdir -p /mnt/okcomputer/output/PRODUCCION_RURALCAN

# Copiar archivos compilados
cp -r dist/* /mnt/okcomputer/output/PRODUCCION_RURALCAN/

echo "📁 Archivos listos en: /mnt/okcomputer/output/PRODUCCION_RURALCAN/"
echo ""
echo "📋 Contenido:"
ls -la /mnt/okcomputer/output/PRODUCCION_RURALCAN/

echo ""
echo "🎯 INSTRUCCIONES PARA SUBIR A TU HOSTING:"
echo "=========================================="
echo ""
echo "1. Compra el dominio ruralcan.com"
echo "2. Compra hosting con cPanel"
echo "3. Accede al Administrador de Archivos"
echo "4. Sube TODO el contenido de PRODUCCION_RURALCAN/ a public_html/"
echo "5. Instala SSL (Let's Encrypt)"
echo "6. ¡Listo! Tu web estará en https://ruralcan.com"
echo ""
echo "📖 Lee DESPLIEGUE_RURALCAN.md para más detalles"
