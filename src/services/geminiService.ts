import { GoogleGenAI } from "@google/genai";

export async function chatWithOracle(message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[]) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, history }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch from AI server");
    }

    const data = await response.json();
    return data.text || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having a bit of trouble right now. Please feel free to reach out to us via WhatsApp for a faster response.";
  }
}
