import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface GeneratedImageResult {
  imageUrl?: string;
  error?: string;
}

export const generateRedCarpetImage = async (base64Image: string): Promise<GeneratedImageResult> => {
  try {
    // Remove data:image/...;base64, prefix if present
    const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: 'image/jpeg', // Assuming jpeg for simplicity, or detect from input
            },
          },
          {
            text: `Generate a high-quality, photorealistic transformation of this image.
            The person in the image is attending the Oscars.
            Render the person in a **full-length view**, placing them in a **confident, elegant model pose** suitable for a red carpet event (e.g., hand on hip, looking slightly over the shoulder).
            It is crucial to **keep the person's exact face and outfit** from the uploaded photo, adapting the outfit to the new full-body pose.
            Change the background to a glamorous Red Carpet event at night with bright paparazzi camera flashes, spotlights, and a blurred crowd in evening wear.
            The lighting should be cinematic, golden, and dramatic.
            Ensure the person looks naturally integrated into the scene.
            High detail, 8k resolution, award ceremony atmosphere. The final image should feature only the one person from the uploaded photo.`,
          },
        ],
      },
      config: {
        // No specific responseMimeType for image generation models in this context
      }
    });

    // Parse response for image
    if (response.candidates && response.candidates.length > 0) {
      const parts = response.candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          return { imageUrl: `data:image/png;base64,${part.inlineData.data}` };
        }
      }
    }

    return { error: "Не удалось создать изображение. Пожалуйста, попробуйте другую фотографию." };

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return { error: error.message || "Произошла ошибка при обработке изображения." };
  }
};