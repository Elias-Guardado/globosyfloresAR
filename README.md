# GlobosyfloresAR — Sitio Web Oficial
 
Sitio web estático para **Globosyflores AR**, negocio de decoración de eventos con globos, flores y alquiler de mobiliario ubicado en Chalatenango, El Salvador.
 
---
 
## Descripción
 
Landing page informativa con las siguientes secciones:
 
- **Quiénes somos** — Presentación del negocio con animaciones de entrada
- **Dónde estamos** — Mapa embebido via OpenStreetMap mostrando el área de trabajo
- **Servicios** — Galería de cards con los trabajos ofrecidos
- **Contacto** — Formulario de contacto + enlaces a redes sociales
---
 
## Tecnologías usadas
 
| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la página |
| CSS3 | Estilos y animaciones (`styles.css`) |
| JavaScript (Vanilla) | Lógica del formulario y animaciones |
| [EmailJS](https://www.emailjs.com/) | Envío de correos desde el formulario sin backend |
| [OpenStreetMap](https://www.openstreetmap.org/) | Mapa embebido de la zona de trabajo |
 
---
 
## Estructura del proyecto
 
```
globosyfloresAR/
├── index.html
└── src/
    ├── styles.css
    ├── main.js
    └── img/
        ├── logo.png
        ├── logo_hero.jpeg
        ├── trabajo_1.jpeg
        ├── trabajo_2.jpeg
        ├── trabajo_3.jpeg
        ├── trabajo_4.jpeg
        ├── trabajo_5.jpeg
        ├── face.jpeg
        ├── instagram.png
        └── whatsapp.jpeg
```
 
---
 
## Configuración de EmailJS
 
El formulario usa [EmailJS](https://www.emailjs.com/) para enviar correos sin necesidad de servidor propio.
 
1. Crear una cuenta en EmailJS
2. Configurar un **Service** (Gmail, Outlook, etc.)
3. Crear un **Template** con las variables: `name`, `email`, `title`, `message`
4. Reemplazar las siguientes claves en `index.html` y `main.js`:
```js
// index.html
emailjs.init('TU_PUBLIC_KEY');
 
// main.js
const serviceID = 'TU_SERVICE_ID';
const templateID = 'TU_TEMPLATE_ID';
```
 
---
 
## Cómo ejecutar el proyecto
 
Al ser un sitio estático, no requiere instalación ni servidor. Solo abrí el `index.html` en el navegador.
 
---
 
## Redes sociales del negocio
 
- [Facebook](https://www.facebook.com/profile.php?id=61570746931526)
- [Instagram](https://www.instagram.com/globosyflores_ar/)
- [WhatsApp](https://wa.me/50369385671)
---
 
## Desarrollado por
 
**Elías Guardado**
 
---
 
## Licencia
 
© GlobosyfloresAR — Todos los derechos reservados.