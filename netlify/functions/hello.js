export const handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "¡Hola Mundo desde Netlify Function!" }),
  };
};
