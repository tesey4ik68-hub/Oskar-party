import React from 'react';
import { StarIcon, TicketIcon, ClapperboardIcon } from './components/Icons';
import Countdown from './components/Countdown';
import SpeechGenerator from './components/SpeechGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500 selection:text-black">
      {/* Decorative Glow Spotlights */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] bg-amber-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] bg-red-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-amber-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        
        {/* Header / Hero */}
        <header className="pt-20 pb-10 text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-amber-900/30 border border-amber-500/30 text-amber-400">
            <StarIcon className="w-4 h-4 mr-2" />
            <span className="text-xs tracking-[0.2em] uppercase font-bold">Официальное Приглашение</span>
            <StarIcon className="w-4 h-4 ml-2" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 gold-text tracking-tight leading-tight">
            ОСКАР <br/>
            <span className="text-3xl md:text-5xl font-normal italic text-white/90">зажигает огни!</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-12"></div>

          <Countdown />
        </header>

        {/* Main Content Card */}
        <main className="relative">
            {/* Red Carpet Visual Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-24 bg-red-700/10 blur-xl pointer-events-none -z-10"></div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl text-center space-y-8">
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif text-amber-100">Дорогие звёзды нашей компании!</h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Приглашаем Вас <span className="text-amber-400 font-bold">26 декабря 2025 года в 17:00</span><br/>
                  на грандиозный Новогодний корпоратив в стиле кинопремии «ОСКАР»!
                </p>
              </div>

              <div className="py-8">
                <h3 className="text-4xl font-serif gold-text mb-4">Вы — главный герой вечера!</h3>
                <div className="flex justify-center">
                  <StarIcon className="w-8 h-8 text-amber-500 animate-pulse" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <div className="text-amber-500 mb-3"><ClapperboardIcon className="w-8 h-8" /></div>
                  <h4 className="font-serif text-xl mb-2 text-white">Красная дорожка</h4>
                  <p className="text-sm text-gray-400">Прогулка под блики софитов и аплодисменты поклонников.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <div className="text-amber-500 mb-3"><TicketIcon className="w-8 h-8" /></div>
                  <h4 className="font-serif text-xl mb-2 text-white">Шоу-программа</h4>
                  <p className="text-sm text-gray-400">Яркие сцены, неожиданные повороты сюжета и изысканный банкет.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <div className="text-amber-500 mb-3"><StarIcon className="w-8 h-8" /></div>
                  <h4 className="font-serif text-xl mb-2 text-white">Финал</h4>
                  <p className="text-sm text-gray-400">Захватывающая музыка и зажигательные танцы до самого конца.</p>
                </div>
              </div>

              <div className="bg-amber-900/20 border border-amber-500/20 rounded-2xl p-6 mt-8 inline-block max-w-2xl mx-auto">
                <p className="text-lg font-serif mb-2 text-amber-200">Дресс-код</p>
                <p className="text-gray-300 mb-4">Вечерний наряд — ведь на «Оскаре» каждый образ становится легендой.</p>
                <p className="text-lg font-serif mb-2 text-amber-200">Место проведения</p>
                <p className="text-gray-300">Актовый зал</p>
              </div>

              <div className="pt-6">
                <p className="text-xl md:text-2xl font-serif italic text-gray-300">
                  Не забудьте захватить настроение на максимум —<br/>
                  ведь в этом году вы номинированы на главную награду:
                </p>
                <div className="mt-6 inline-block transform rotate-[-2deg]">
                  <div className="px-8 py-4 bg-gradient-to-r from-amber-200 to-amber-500 text-black font-bold text-2xl md:text-3xl shadow-[0_0_30px_rgba(251,191,36,0.6)] rounded-sm">
                    «Лучшая команда!»
                  </div>
                </div>
              </div>

              <div className="text-2xl font-serif gold-text pt-8 tracking-wide">
                Блесни! Играй! Празднуй!<br/>
                Ваш звёздный час настал!
              </div>
            </div>
        </main>

        {/* AI Interaction Section */}
        <section className="py-20">
          <SpeechGenerator />
        </section>

        {/* Footer */}
        <footer className="pb-10 text-center text-gray-500 text-sm">
          <p>© 2025 Corporate Events Team.</p>
          <div className="flex justify-center space-x-4 mt-4 opacity-50">
             <StarIcon className="w-4 h-4" />
             <StarIcon className="w-4 h-4" />
             <StarIcon className="w-4 h-4" />
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;
