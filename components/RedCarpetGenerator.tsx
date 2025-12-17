import React, { useState, useRef } from 'react';
import { generateRedCarpetImage } from '../services/geminiService';

const RedCarpetGenerator: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Размер файла слишком велик. Пожалуйста, выберите изображение до 5MB.");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await generateRedCarpetImage(selectedImage);
      if (result.error) {
        setError(result.error);
      } else if (result.imageUrl) {
        setGeneratedImage(result.imageUrl);
      }
    } catch (err) {
      setError("Произошла непредвиденная ошибка. Попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setGeneratedImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-1 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 rounded-2xl opacity-75 blur-sm animate-pulse-slow"></div>
      <div className="relative bg-black rounded-2xl border border-gold-500 p-6 md:p-10 shadow-2xl overflow-hidden">
        
        {/* Module Header */}
        <div className="text-center mb-10">
          <span className="inline-block py-1 px-3 border border-gold-400 rounded-full text-gold-400 text-xs font-bold tracking-widest uppercase mb-4">
            Эксклюзив
          </span>
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-4 gold-text-shadow">
            Примерь Образ Звезды
          </h2>
          <p className="text-gold-200 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Загрузите ваше фото в наряде для корпоратива, и наш искусственный интеллект перенесет вас прямо на красную ковровую дорожку в блеск софитов!
          </p>
        </div>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch min-h-[400px]">
          
          {/* Upload Section */}
          <div className={`flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gold-700 hover:border-gold-400 rounded-xl p-6 transition-all duration-300 bg-gray-900/50 ${!selectedImage ? 'cursor-pointer' : ''}`}
               onClick={() => !selectedImage && fileInputRef.current?.click()}>
            
            {!selectedImage ? (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gold-900/50 rounded-full flex items-center justify-center border border-gold-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gold-100 font-sans font-medium">Нажмите, чтобы загрузить фото</p>
                <p className="text-xs text-gray-400">JPG, PNG до 5MB</p>
              </div>
            ) : (
              <div className="relative w-full h-full flex flex-col">
                 <div className="relative flex-grow rounded-lg overflow-hidden mb-4 bg-black">
                   <img src={selectedImage} alt="Original" className="w-full h-full object-contain" />
                 </div>
                 <div className="flex justify-center">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleReset(); }}
                      className="text-xs text-red-400 hover:text-red-300 underline font-sans"
                    >
                      Выбрать другое фото
                    </button>
                 </div>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              accept="image/*" 
              className="hidden" 
            />
          </div>

          {/* Action / Result Section */}
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-900/30 rounded-xl p-4 border border-gold-900 relative">
             
             {/* Loading State */}
             {isLoading && (
               <div className="absolute inset-0 z-20 bg-black/80 flex flex-col items-center justify-center rounded-xl">
                 <div className="w-16 h-16 border-4 border-gold-600 border-t-gold-300 rounded-full animate-spin mb-4"></div>
                 <p className="text-gold-300 animate-pulse font-serif italic text-lg">Магия кино...</p>
                 <p className="text-gold-500/50 text-xs mt-2">Обработка может занять до 15 секунд</p>
               </div>
             )}

             {!generatedImage ? (
                <div className="text-center h-full flex flex-col justify-center items-center p-6">
                  {selectedImage ? (
                     <div className="space-y-6">
                       <p className="text-gold-200 font-serif italic text-xl">Готовы блистать?</p>
                       <button 
                         onClick={handleGenerate}
                         disabled={isLoading}
                         className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold uppercase tracking-widest rounded shadow-[0_0_20px_rgba(212,165,35,0.5)] hover:shadow-[0_0_40px_rgba(212,165,35,0.8)] transform hover:scale-105 transition-all duration-300"
                       >
                         Создать Образ
                       </button>
                     </div>
                  ) : (
                    <div className="opacity-30 flex flex-col items-center">
                      <div className="text-6xl mb-4">✨</div>
                      <p className="text-gold-500/50 font-serif">Результат появится здесь</p>
                    </div>
                  )}
                </div>
             ) : (
               <div className="relative w-full h-full flex flex-col">
                 <div className="relative flex-grow rounded-lg overflow-hidden border-2 border-gold-500 shadow-2xl group">
                   <img src={generatedImage} alt="Red Carpet" className="w-full h-full object-contain" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <a href={generatedImage} download="MyOscarLook.png" className="text-white bg-gold-600 px-4 py-2 rounded font-bold text-sm hover:bg-gold-500">
                        Скачать
                      </a>
                   </div>
                 </div>
                 <div className="mt-4 text-center">
                   <p className="text-gold-300 font-cinzel font-bold text-lg mb-2">Вы великолепны!</p>
                   <button 
                    onClick={handleReset}
                    className="px-6 py-2 border border-gold-500 text-gold-400 hover:bg-gold-500/10 rounded transition-colors text-sm uppercase tracking-wider"
                   >
                     Попробовать еще
                   </button>
                 </div>
               </div>
             )}
          </div>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-900/30 border border-red-500/50 rounded text-red-200 text-center font-sans">
            {error}
          </div>
        )}

      </div>
    </div>
  );
};

export default RedCarpetGenerator;