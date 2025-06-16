# 🌟 Tributo a Personajes

Una aplicación web interactiva donde puedes rendir tributo a personajes famosos (reales o ficticios). Al ingresar un nombre, se consulta la **Gemini API** y la **Openverse API** para generar contenido relevante: biografía, contribuciones, frases icónicas, obras destacadas, imágenes, videos ¡y mucho más!

![Preview del proyecto](./public/preview.png) <!-- Puedes cambiar este link o eliminarlo si no tienes una imagen -->

## 🚀 Características

- ✅ Búsqueda por nombre del personaje.
- ✅ Biografía generada con inteligencia artificial (Gemini).
- ✅ Imágenes y multimedia con Openverse API.
- ✅ Secciones organizadas: Biografía, Contribuciones, Curiosidades, Frases, Obras y Videos.
- ✅ Interfaz clara y responsiva.
- ✅ Construido con **Vite** para desarrollo moderno y rápido.

## 🧰 Tecnologías Usadas

- [Vite](https://vitejs.dev/) - Bundler ultrarrápido
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Gemini API](https://ai.google.dev/) - IA generativa para textos
- [Openverse API](https://openverse.org/) - Imágenes libres de derechos
- HTML5 + CSS3 + FontAwesome
- Google Fonts (Roboto)

## 🖼️ Estructura del Proyecto

```
/public
  └── author.png
/src
  ├── main.js
  ├── api.js
  ├── data.json
  └── style.css
index.html
README.md
```

## 🔍 ¿Cómo usar?

1. **Clona el repositorio:**

```bash
git clone https://github.com/sebitas71133/tributo-zen.git
cd tributo-zen
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Inicia el servidor de desarrollo:**

```bash
npm run dev
```

4. Abre en tu navegador: [http://localhost:5173](http://localhost:5173)

## 🧪 Funcionalidad

- El usuario escribe un nombre en la barra de búsqueda.
- Se llama a la **Gemini API** para obtener la biografía, frases y curiosidades.
- Se consulta la **Openverse API** para obtener imágenes relevantes.
- El contenido se actualiza dinámicamente en cada sección.

## 📦 Build para producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist`.

## 🤖 APIs utilizadas

- **Gemini API**: generación de contenido textual (biografías, frases, etc).
- **Openverse API**: imágenes y multimedia con licencia libre.

## ✍️ Autor

Desarrollado con 💻 y ☕ por [Tu Nombre o Nickname].

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

> “Los grandes personajes viven para siempre en nuestras memorias. Esta app es solo un pequeño homenaje.”
