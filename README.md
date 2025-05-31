
# Portafolio/Hoja de Vida – Javier Barrera

Proyecto desarrollado para la **Actividad 4 – Introducción a los Lenguajes de Internet** (Etapa de Transferencia) de Ingeniería de Software – UCompensar.

## 💡 Tech stack
- **HTML5** + **CSS3** + **JavaScript ES6**
- GitHub Pages como hosting
- Formspree (POST) – envía mensajes del formulario de contacto
- GitHub REST API (GET) – muestra últimos repos de cualquier usuario
- JSONPlaceholder (PUT) – demo de actualización de recurso

## 📂 Estructura
```
├── index.html
├── projects.html
├── contact.html
├── assets
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── main.js
│   └── img
│       └── profile.jpg  (reemplaza por tu foto)
└── README.md
```

## 🚀 Despliegue en GitHub Pages
1. Crea un nuevo repositorio llamado `cv-javier` y sube el contenido de esta carpeta.
2. En **Settings → Pages**, selecciona la rama `main` y carpeta `/` como fuente.
3. ¡Listo! Tu sitio quedará disponible en `https://<usuario>.github.io/cv-javier`.

## 📑 Cómo cumple los requisitos
| Requisito | Dónde se evidencia |
|-----------|-------------------|
| Uso de `<div>` y `<span>` | Logotipo en `index.html`, footer |
| Formulario **GET** | `#repoForm` en `index.html` |
| Formulario **POST** | `contactForm` en `contact.html` (Formspree) |
| Formulario **PUT** | `putForm` en `contact.html` (fetch a JSONPlaceholder) |
| Imágenes, tablas, enlaces | Secciones `skills-table`, navegación, imágenes |
| Sitio dinámico & agradable | Inspirado en diseño de [Sean Halpin](https://www.seanhalpin.design) |

Reemplaza los textos e imágenes con tu información real antes de publicar.
