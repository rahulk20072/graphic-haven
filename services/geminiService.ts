import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToMuse = async (message: string, history: { role: 'user' | 'model'; text: string }[]) => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct history for context, limited to last few turns to keep it focused
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: model,
      history: chatHistory,
      config: {
        systemInstruction: "You are Muse, a sophisticated and creative design assistant for 'Graphic Haven', a high-end graphic design portfolio. Your tone is professional, artistic, and encouraging. You help visitors brainstorm design ideas, explain design concepts (like typography, color theory, brutalism, minimalism), and suggest color palettes. Keep answers concise and impactful, suitable for a chat interface.",
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Muse is currently contemplating deep design thoughts. Please try again later.");
  }
};