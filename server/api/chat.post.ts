import { GoogleGenerativeAI } from '@google/generative-ai'

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { message } = body;
  
  if (!message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'El missatge és requerit.'
    });
  }

  const apiKey = process.env.NUXT_AI_API_KEY;
  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'La clau API no està configurada. Afegeix NUXT_AI_API_KEY en .env'
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Ets EcoTrack AI, un assistent mediambiental centrat en donar consells breus, agradables i d'alta qualitat sobre reciclatge i ecologia.\nUsuari: ${message}\nRespon en català i de manera molt concisa per a un xat mòbil:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return { response: text };
  } catch (err: any) {
    console.error('Error generating AI response:', err.message);
    throw createError({
      statusCode: 503,
      statusMessage: "Sense connexió. O la xarxa no funciona, o l'API està tancada."
    });
  }
});
