import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProfessionalBio = async (currentBio: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      请将以下的学生个人简介改写得更加专业、吸引人，并适合用于设计作品集网站。
      要求：
      1. 使用中文输出。
      2. 字数控制在 80 字以内。
      3. 语气要充满热情、自信且专业。
      
      当前简介: "${currentBio}"
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "无法生成简介，请重试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "生成内容出错，请检查您的 API Key 配置。";
  }
};