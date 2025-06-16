import { geminiApi, openverseApi } from "./api";
import data from "./data.json";

const bio = document.querySelector("#biografia");
const cont = document.querySelector("#contribuciones");
const fila = document.querySelector("#filantropia");
const cita = document.querySelector("#citas");

const tarjetasArray = [bio, cont, fila, cita];

// Elementos del contenido
const autorNombre = document.getElementById("autorNombre");
const bioTexto = document.getElementById("bioTexto");
const bioImagen = document.getElementById("bioImagen");

const contribucionesLista = document.getElementById("contribucionesLista");
const contriImagen = document.getElementById("contriImagen");

const filaTexto = document.getElementById("filaTexto");
const filaImagen = document.getElementById("filaImagen");

const citasLista = document.getElementById("citasLista");
const citasImagen = document.getElementById("citasImagen");

// Ocultar todo excepto biografía al cargar
window.addEventListener("load", () => {
  cont.style.display = "none";
  fila.style.display = "none";
  cita.style.display = "none";

  autorNombre.textContent = `Autor: Bill Gates`;
  renderizarDatosAutor(data);
  renderizarImagenes(data.imagenes);
});

//
const botones = [
  document.getElementById("btnBiografia"),
  document.getElementById("btnContribuciones"),
  document.getElementById("btnFilantropia"),
  document.getElementById("btnCitas"),
];

// Agregar eventos a los botones para mostrar contenido
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    tarjetas(boton.dataset.text);
  });
});

// Funcion que muestra contenido
export const tarjetas = (seccion) => {
  tarjetasArray.forEach((tarjeta) => {
    tarjeta.style.display =
      tarjeta.id === seccion.toLowerCase().trim() ? "flex" : "none";
  });
};

document.getElementById("btnSearch").onclick = async () => {
  const valorTextarea = document.getElementById("searchName").value.trim();
  console.log({ valorTextarea });
  if (!valorTextarea) {
    alert("Por favor, ingresa el nombre de un autor.");
    return;
  }

  isloadingData(valorTextarea);

  try {
    const datos = await geminiApi(valorTextarea);

    console.log({ datos });

    renderizarDatosAutor(datos);

    // const imagenes = await openverseApi(valorTextarea, 4);
    // console.log({ imagenes });

    renderizarImagenes(imagenes);

    tarjetas("biografia");
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error al buscar al autor. Inténtalo nuevamente.");
  }
};

export const renderizarDatosAutor = (datos) => {
  // Biografía
  bioTexto.textContent = datos.biografia || "Biografía no disponible";

  // Filantropía
  filaTexto.textContent = datos.filantropia || "Filantropía no disponible";

  // Contribuciones
  if (Array.isArray(datos.contribuciones) && datos.contribuciones.length) {
    datos.contribuciones.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      contribucionesLista.appendChild(li);
    });
  } else {
    contribucionesLista.innerHTML =
      "<li>No hay contribuciones disponibles.</li>";
  }

  // Citas
  if (Array.isArray(datos.citas) && datos.citas.length) {
    datos.citas.forEach((frase) => {
      const li = document.createElement("li");
      li.textContent = `"${frase}"`;
      citasLista.appendChild(li);
    });
  } else {
    citasLista.innerHTML = "<li>No hay citas disponibles.</li>";
  }
};

export const renderizarImagenes = (imagenes = []) => {
  bioImagen.src = imagenes[0] || "";
  contriImagen.src = imagenes[1] || "";
  filaImagen.src = imagenes[2] || "";
  citasImagen.src = imagenes[3] || "";
};

export const isloadingData = (valorTextarea) => {
  autorNombre.textContent = `Autor: ${valorTextarea}`;
  bioTexto.textContent = "Cargando...";
  filaTexto.textContent = "Cargando...";
  contribucionesLista.innerHTML = "";
  citasLista.innerHTML = "";
};
