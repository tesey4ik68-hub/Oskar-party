import React from 'react';

const InvitationDetails: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 px-6 pb-20 relative z-10">
      <div className="text-center space-y-12">
        
        {/* Intro */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-200 to-gold-600 drop-shadow-sm">
            Дорогие звёзды нашей компании!
          </h1>
          <div className="h-1 w-32 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Text */}
        <div className="space-y-8 font-serif text-lg md:text-xl text-gold-100 leading-loose">
          <p>
            Приглашаем Вас <span className="text-gold-400 font-bold">26 декабря 2025 года в 17:00</span>
            <br />
            на грандиозный Новогодний корпоратив в стиле кинопремии 
            <br />
            <span className="text-3xl font-cinzel text-gold-500 block mt-2">«ОСКАР»!</span>
          </p>

          <p className="text-2xl font-bold italic text-gold-300">
            Вы — главный герой вечера!
          </p>

          <div className="bg-black/40 p-8 rounded-xl border border-gold-900 backdrop-blur-sm mx-auto max-w-2xl">
            <h3 className="text-gold-400 font-bold uppercase tracking-widest mb-6 text-sm">Вас ждёт самое глянцевое событие года:</h3>
            <ul className="space-y-4 text-left mx-auto max-w-lg list-none">
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✦</span>
                Прогулка по красной дорожке под блики софитов и аплодисменты поклонников
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✦</span>
                Яркие сцены и неожиданные повороты сюжета
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-3 text-xl">✦</span>
                Изысканный банкет, захватывающая музыка и зажигательные танцы до самого финала
              </li>
            </ul>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto font-sans text-gold-200">
          <div className="border border-gold-700/50 p-6 rounded-lg bg-gradient-to-b from-black/20 to-gold-900/10">
            <h4 className="font-cinzel font-bold text-gold-400 text-xl mb-2">Дресс-код</h4>
            <p className="italic">Вечерний наряд — ведь на «Оскаре» каждый образ становится легендой.</p>
          </div>
          <div className="border border-gold-700/50 p-6 rounded-lg bg-gradient-to-b from-black/20 to-gold-900/10">
            <h4 className="font-cinzel font-bold text-gold-400 text-xl mb-2">Место проведения</h4>
            <p>Актовый зал</p>
          </div>
        </div>

        {/* Closing */}
        <div className="space-y-6 pt-8">
          <p className="font-serif italic text-gold-200 text-lg">
            Не забудьте захватить настроение на максимум —
            <br />
            ведь в этом году вы номинированы на главную награду:
          </p>
          <div className="inline-block border-2 border-gold-400 px-8 py-4 rounded-sm bg-black/50 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <span className="font-cinzel font-bold text-2xl md:text-4xl text-gold-400 tracking-widest uppercase">
              «Лучшая команда!»
            </span>
          </div>
          
          <div className="pt-12">
            <p className="font-cinzel font-bold text-3xl md:text-5xl text-white gold-text-shadow leading-tight">
              Блесни! Играй! Празднуй!
            </p>
            <p className="mt-4 font-serif italic text-gold-300 text-xl">
              Ваш звёздный час настал!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InvitationDetails;