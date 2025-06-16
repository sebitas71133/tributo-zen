// src/main.js
import { geminiApi, openverseApi } from "./api";
import datos from "./data.json";

// Elementos del DOM
const autorNombre = document.getElementById("autorNombre");
const primerAparicion = document.getElementById("primerAparicion");
const bioTexto = document.getElementById("bioTexto");
const bioImagen = document.getElementById("bioImagen");
const contribucionesLista = document.getElementById("contribucionesLista");
const contriImagen = document.getElementById("contriImagen");
const curiosidadesLista = document.getElementById("curiosidadesLista");
const curioImagen = document.getElementById("curioImagen");
const frasesContainer = document.getElementById("frasesContainer");
const frasesImagen = document.getElementById("frasesImagen");
const obrasContainer = document.getElementById("obrasContainer");
const obrasImagen = document.getElementById("obrasImagen");
const videosContainer = document.getElementById("videosContainer");
const enlaceWiki = document.getElementById("enlaceWiki");
const enlaceFandom = document.getElementById("enlaceFandom");
const creadoresLista = document.getElementById("creadoresLista");

// Secciones
const sections = {
  biografia: document.getElementById("biografia"),
  contribuciones: document.getElementById("contribuciones"),
  curiosidades: document.getElementById("curiosidades"),
  frases: document.getElementById("frases"),
  obras: document.getElementById("obras"),
  multimedia: document.getElementById("multimedia"),
};

// Botones del menú
const botones = {
  biografia: document.getElementById("btnBiografia"),
  contribuciones: document.getElementById("btnContribuciones"),
  curiosidades: document.getElementById("btnCuriosidades"),
  frases: document.getElementById("btnFrases"),
  obras: document.getElementById("btnObras"),
  multimedia: document.getElementById("btnVideo"),
};

// Ocultar todas las secciones al cargar
Object.values(sections).forEach((section) => {
  section.style.display = "none";
});

// Mostrar biografía por defecto
sections.biografia.style.display = "block";
botones.biografia.classList.add("active");

// Eventos de los botones del menú
Object.entries(botones).forEach(([key, boton]) => {
  boton.addEventListener("click", () => {
    // Ocultar todas las secciones
    Object.values(sections).forEach((section) => {
      section.style.display = "none";
    });

    // Remover clase active de todos los botones
    Object.values(botones).forEach((btn) => {
      btn.classList.remove("active");
    });

    // Mostrar sección seleccionada
    sections[key].style.display = "block";
    boton.classList.add("active");
  });
});

// Evento de búsqueda
document.getElementById("btnSearch").addEventListener("click", buscarAutor);
document.getElementById("searchName").addEventListener("keypress", (e) => {
  if (e.key === "Enter") buscarAutor();
});

async function buscarAutor() {
  const nombre = document.getElementById("searchName").value.trim();
  if (!nombre) {
    alert("Por favor, ingresa el nombre de un personaje");
    return;
  }

  mostrarLoading();
  autorNombre.textContent = nombre;

  try {
    const datos = await geminiApi(nombre);
    console.log({ datos });
    renderizarDatos(datos);

    // Obtener imágenes de la api
    const imagenes = await openverseApi(nombre, 5);
    renderizarImagenes(imagenes);

    // Mostrar sección de biografía
    Object.values(sections).forEach((section) => {
      section.style.display = "none";
    });
    sections.biografia.style.display = "block";
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error al buscar el personaje. Inténtalo nuevamente.");
  }
}

function mostrarLoading() {
  primerAparicion.textContent = "Cargando información...";
  bioTexto.textContent = "Cargando biografía...";
  contribucionesLista.innerHTML = "<li>Cargando...</li>";
  curiosidadesLista.innerHTML = "<li>Cargando...</li>";
  frasesContainer.innerHTML =
    "<div class='frase-card'>Cargando frases...</div>";
  obrasContainer.innerHTML = "<div class='obra-card'>Cargando obras...</div>";
  videosContainer.innerHTML =
    "<div class='video-card'>Cargando videos...</div>";
  creadoresLista.innerHTML = "Cargando...";
}

function renderizarDatos(datos) {
  const personaje = datos;

  primerAparicion.textContent =
    personaje.primer_aparicion || "Fecha de primera aparición no disponible";
  bioTexto.textContent = personaje.descripcion || "Descripción no disponible";

  // Contribuciones
  contribucionesLista.innerHTML = "";
  if (
    Array.isArray(personaje.contribuciones) &&
    personaje.contribuciones.length
  ) {
    personaje.contribuciones.forEach((contribucion) => {
      const li = document.createElement("li");
      li.textContent = contribucion;
      contribucionesLista.appendChild(li);
    });
  } else {
    contribucionesLista.innerHTML =
      "<li>No hay contribuciones disponibles</li>";
  }

  // Curiosidades
  curiosidadesLista.innerHTML = "";
  if (Array.isArray(personaje.curiosidades) && personaje.curiosidades.length) {
    personaje.curiosidades.forEach((curiosidad) => {
      const li = document.createElement("li");
      li.textContent = curiosidad;
      curiosidadesLista.appendChild(li);
    });
  } else {
    curiosidadesLista.innerHTML = "<li>No hay curiosidades disponibles</li>";
  }

  // Frases icónicas
  frasesContainer.innerHTML = "";
  if (
    Array.isArray(personaje.frases_iconicas) &&
    personaje.frases_iconicas.length
  ) {
    personaje.frases_iconicas.forEach((frase) => {
      const card = document.createElement("div");
      card.className = "frase-card";
      card.textContent = frase;
      frasesContainer.appendChild(card);
    });
  } else {
    frasesContainer.innerHTML =
      "<div class='frase-card'>No hay frases disponibles</div>";
  }

  // Obras destacadas
  obrasContainer.innerHTML = "";
  if (
    Array.isArray(personaje.obras_destacadas) &&
    personaje.obras_destacadas.length
  ) {
    personaje.obras_destacadas.forEach((obra) => {
      const card = document.createElement("div");
      card.className = "obra-card";
      card.innerHTML = `<h4>${obra}</h4>`;
      obrasContainer.appendChild(card);
    });
  } else {
    obrasContainer.innerHTML =
      "<div class='obra-card'>No hay obras disponibles</div>";
  }

  // Videos recomendados
  videosContainer.innerHTML = "";
  if (
    Array.isArray(personaje.videos_recomendados) &&
    personaje.videos_recomendados.length
  ) {
    personaje.videos_recomendados.forEach((video) => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
                <h4>${video.titulo}</h4>
                <a href="${video.url}" target="_blank">Ver en YouTube</a>
            `;
      videosContainer.appendChild(card);
    });
  } else {
    videosContainer.innerHTML =
      "<div class='video-card'>No hay videos disponibles</div>";
  }

  // Fuentes y creadores
  if (Array.isArray(personaje.fuentes) && personaje.fuentes.length >= 2) {
    enlaceWiki.href = personaje.fuentes[0];
    enlaceFandom.href = personaje.fuentes[1];
  }

  creadoresLista.innerHTML = "";
  if (Array.isArray(personaje.creadores) && personaje.creadores.length) {
    personaje.creadores.forEach((creador) => {
      creadoresLista.innerHTML += `<div>${creador}</div>`;
    });
  } else {
    creadoresLista.textContent = "Creador no disponible";
  }
}

function renderizarImagenes(imagenes) {
  const imageElements = [
    bioImagen,
    contriImagen,
    curioImagen,
    frasesImagen,
    obrasImagen,
  ];

  imageElements.forEach((img, index) => {
    if (imagenes[index]) {
      img.src = imagenes[index];
      img.alt = `Imagen de ${autorNombre.textContent}`;
    }
  });
}

// Carga inicial
window.addEventListener("load", () => {
  autorNombre.textContent = "Gabe Newell";

  renderizarDatos(datos);

  renderizarImagenes(datos.imagenes);
});
