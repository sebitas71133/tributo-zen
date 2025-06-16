# 🌟 Tributo a Personajes

Una aplicación web interactiva donde puedes rendir tributo a personajes famosos (reales o ficticios). Al ingresar un nombre, se consulta la **Gemini API** y la **Openverse API** para generar contenido relevante: biografía, contribuciones, frases icónicas, obras destacadas, imágenes, videos ¡y mucho más!

## 🖼️ Vista previa del proyecto

| Personaje reconocido                                                                           |
| ---------------------------------------------------------------------------------------------- |
| ![Reconocido](https://github.com/user-attachments/assets/c0492482-2c3c-4310-ac40-a3d4ecf94095) |

| Detalles generados                                                                           | Diseño móvil                                                                              |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Detalles](https://github.com/user-attachments/assets/f4cbef3b-2dba-4d07-a91f-3ca732d87cd7) | ![Móvil](https://github.com/user-attachments/assets/d9a177c1-55cc-4e9b-a621-404894333f74) |

---

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

Desarrollado con 💻 y ☕ por [sebitas71133].

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

> “Los grandes personajes viven para siempre en nuestras memorias. Esta app es solo un pequeño homenaje.”
