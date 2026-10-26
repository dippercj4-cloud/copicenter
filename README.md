# Copicenter


Proyecto comercial para Copicenter con foco en servicios de impresión, documentos, diseño y soporte tecnológico. La solución está pensada como sitio estático compatible con GitHub Pages, con una identidad visual clara para la marca principal y una sección independiente para Rodriguh Workshop.


## Estructura


- `index.html`: contenido principal de la landing page.
- `styles/styles.css`: sistema visual de Copicenter y Rodriguh Workshop.
- `scripts/app.js`: fuente de datos del catálogo, filtros, carrito, cotizador y mensajes de WhatsApp.
- `assets/favicon.svg`: icono de la marca.
- `src/main.rs`: punto de entrada Rust para mantener la compilación del proyecto.


## Compilación local


1. Instala Rust y Cargo.
2. Desde la raíz del proyecto ejecuta:


```bash
cargo build
```


3. Para visualizar la interfaz localmente:


```bash
python3 -m http.server 8000
```


Y abre la URL:


```text
http://localhost:8000/copicenter/
```


## Contacto comercial


El número de WhatsApp del receptor se configura en `scripts/app.js` y se muestra en la sección Contacto. El botón de contacto abre el chat con el resumen del carrito y descarga la imagen para adjuntarla:


```js
const COMMERCIAL_CONFIG = {
  whatsappNumber: "573000290582",
  businessName: "Copicenter"
};
```


Al abrir WhatsApp, adjunta manualmente la imagen descargada para enviarla junto con el pedido.


## Publicación en GitHub Pages


1. Sube este repositorio a GitHub.
2. En la configuración del repositorio, habilita GitHub Pages con la rama principal o con la carpeta de salida que corresponda.
