export const geminiApi = async (valorTextarea) => {
  const res = await fetch("/.netlify/functions/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ autor: valorTextarea }),
  });

  const datos = await res.json();

  return datos;
};

export const openverseApi = async (autor, cantidad = 4) => {
  const url = `https://api.openverse.org/v1/images?q=${encodeURIComponent(
    autor
  )}&page_size=${cantidad}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results?.map((img) => img.url) || [];
  } catch (error) {
    console.error("Error al obtener imágenes de Openverse:", error);
    return [];
  }
};
