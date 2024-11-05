import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

export const initGenerativeAI = (apikey) => {
    const genAI = new GoogleGenerativeAI(apikey);
    return genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });
};

export const generationConfig = {
    temperature: 1,
    topP: 0.4,
    topK: 10,
    maxOutputTokens: 500,
    responseMimeType: "text/plain",
};

export const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
];
