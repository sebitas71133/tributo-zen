import { GoogleGenerativeAI } from "@google/generative-ai";

import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.VITE_GEMINI_API_KEY;

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Método no permitido" }),
    };
  }

  try {
    const { autor } = JSON.parse(event.body);
    if (!autor) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Nombre del autor requerido" }),
      };
    }
    //gemini-1.5-flash
    //gemini-2.5-flash-preview-05-20
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const prompt = `
Actúa como generador de contenido para una página web de tributo dedicada a figuras importantes, ya sean autores, personajes ficticios, celebridades u otras personas influyentes.

Para el nombre "${autor}", genera un objeto JSON con información relevante. Si algún dato no aplica o no hay información disponible, usa null o un array vacío. Usa siempre comillas dobles. La respuesta debe contener solo el JSON sin explicaciones.

{
  "descripcion": "Resumen general sobre quién es o qué representa",
  "contribuciones": ["Aporte o impacto 1", "Aporte 2"],
  "frases_iconicas": ["Frase 1", "Frase 2"],
  "obras_destacadas": ["Obra o aparición destacada 1", "Obra 2"],
  "creadores": ["Nombre del creador o autores, si es personaje"],
  "primer_aparicion": "Año o lugar donde apareció por primera vez",
  "curiosidades": ["Dato curioso 1", "Dato curioso 2"],
  "fuentes": [
    "https://es.wikipedia.org/wiki/${autor}",
    "https://www.imdb.com/...",
    "https://www.goodreads.com/..."
  ],
  "videos_recomendados": [
    {
      "titulo": "Videos relacionados a ${autor}",
      "url": "https://www.youtube.com/results?search_query=${autor}"
    }
  ]
}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("No se pudo extraer JSON válido.");

    const data = JSON.parse(match[0]);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error en función de Gemini:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno del servidor" }),
    };
  }
}
