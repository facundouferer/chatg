import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatResponse, SafetyRatings } from '../types/TypesChat';

const GeminisChat = async (consulta: string) => {

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chatResponse = await model.generateContent(consulta);
  console.log(chatResponse);

  const ratings = chatResponse?.response?.promptFeedback?.safetyRatings ?? [];

  const safetyRatings: SafetyRatings = {
    sexuallyExplicit: ratings.find(item => item.category === "HARM_CATEGORY_SEXUALLY_EXPLICIT")?.probability.toString() ?? "",
    hateSpeech: ratings.find(item => item.category === "HARM_CATEGORY_HATE_SPEECH")?.probability.toString() ?? "",
    harrassment: ratings.find(item => item.category === "HARM_CATEGORY_HARASSMENT")?.probability.toString() ?? "",
    dangerousContent: ratings.find(item => item.category === "HARM_CATEGORY_DANGEROUS_CONTENT")?.probability.toString() ?? "",
  }

  if (chatResponse?.response?.candidates !== undefined) {
    const candidates = chatResponse?.response?.candidates ?? [];
    const response: ChatResponse = {
      type: "answer",
      text: candidates[0]?.content?.parts[0]?.text ?? "",
      speaker: "bot",
      finishReason: candidates[0]?.finishReason ?? "",
      safetyRatings: safetyRatings
    };
    return response;
  } else {
    const response: ChatResponse = {
      type: "answer",
      text: 'No todas las preguntas tienen respuesta, intenta con otra pregunta.',
      speaker: "bot",
      finishReason: "",
      safetyRatings: safetyRatings
    };
    return response;
  }

}

export default GeminisChat;