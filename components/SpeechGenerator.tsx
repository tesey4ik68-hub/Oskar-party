import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { SpeechMood, SpeechRequest } from '../types';
import { SparklesIcon, ClapperboardIcon, StarIcon } from './Icons';

const SpeechGenerator: React.FC = () => {
  const [formData, setFormData] = useState<SpeechRequest>({
    name: '',
    role: '',
    mood: SpeechMood.FUNNY
  });
  const [generatedSpeech, setGeneratedSpeech] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!formData.name || !formData.role) {
      setError("Пожалуйста, введите имя и должность.");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setGeneratedSpeech('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        Представь, что ты спичрайтер на корпоративной вечеринке в стиле "Оскар".
        Напиши короткую (3-5 предложений), ${formData.mood.toLowerCase()} речь победителя Оскара (Acceptance Speech).
        
        Автор речи: ${formData.name}
        Должность: ${formData.role}
        Повод: Получение награды "Лучшая команда" на новогоднем корпоративе 2026.
        
        Речь должна быть живой, от первого лица, и обязательно упоминать коллег или "тяжелый труд" в шутливой или эпичной манере (в зависимости от настроения).
        Не используй markdown форматирование, просто текст.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      if (response.text) {
        setGeneratedSpeech(response.text);
      } else {
        setError("Не удалось сгенерировать речь. Попробуйте еще раз.");
      }
    } catch (err) {
      console.error(err);
      setError("Произошла ошибка при соединении с 'Комитетом Академии'. Проверьте API ключ.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-16 p-1 rounded-2xl bg-gradient-to-br from-amber-600 via-amber-300 to-amber-700 shadow-2xl">
      <div className="bg-zinc-900 rounded-xl p-6 md:p-10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <ClapperboardIcon className="w-32 h-32 text-amber-100" />
        </div>

        <div className="relative z-10 text-center mb-8">
          <h3 className="text-3xl font-serif text-amber-400 mb-2">Генератор Речи Победителя</h3>
          <p className="text-gray-400">
            Вы номинированы на главную награду! Подготовьтесь к своему звездному часу с помощью ИИ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 relative z-10">
          <div>
            <label className="block text-amber-200 text-sm mb-2">Ваше Имя</label>
            <input
              type="text"
              placeholder="Иван Петров"
              className="w-full bg-black/50 border border-amber-900/50 rounded p-3 text-white focus:border-amber-500 outline-none transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-amber-200 text-sm mb-2">Ваша Должность</label>
            <input
              type="text"
              placeholder="Менеджер проектов"
              className="w-full bg-black/50 border border-amber-900/50 rounded p-3 text-white focus:border-amber-500 outline-none transition-colors"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            />
          </div>
        </div>

        <div className="mb-8 relative z-10">
          <label className="block text-amber-200 text-sm mb-2">Настроение речи</label>
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.values(SpeechMood).map((m) => (
              <button
                key={m}
                onClick={() => setFormData({...formData, mood: m})}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${
                  formData.mood === m
                    ? 'bg-amber-600 border-amber-500 text-white shadow-[0_0_10px_rgba(217,119,6,0.5)]'
                    : 'bg-transparent border-zinc-700 text-gray-400 hover:border-amber-500/50'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center relative z-10">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-serif font-bold text-black transition-all duration-200 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shimmer"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Сочиняем шедевр...
              </span>
            ) : (
              <span className="flex items-center">
                <SparklesIcon className="w-5 h-5 mr-2" />
                Написать Речь
              </span>
            )}
          </button>
        </div>

        {error && (
          <div className="mt-6 text-center text-red-400 bg-red-900/20 p-4 rounded border border-red-900/50">
            {error}
          </div>
        )}

        {generatedSpeech && (
          <div className="mt-8 animate-fade-in">
            <div className="p-6 bg-black/40 rounded-lg border border-amber-500/20 text-center relative">
              <StarIcon className="w-8 h-8 text-amber-500 absolute -top-4 -left-4 animate-bounce" />
              <StarIcon className="w-6 h-6 text-amber-500 absolute -bottom-3 -right-3 animate-pulse" />
              <h4 className="text-amber-300 font-serif mb-4 text-xl">Ваша речь:</h4>
              <p className="text-lg leading-relaxed text-gray-200 italic font-serif">
                "{generatedSpeech}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeechGenerator;