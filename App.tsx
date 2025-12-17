import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import RedCarpetGenerator from './components/RedCarpetGenerator';
import InvitationDetails from './components/InvitationDetails';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gold-100 overflow-x-hidden relative selection:bg-gold-500 selection:text-black">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Spotlight Left */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-white opacity-10 blur-[150px] rounded-full mix-blend-overlay"></div>
        {/* Spotlight Right */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gold-400 opacity-5 blur-[150px] rounded-full mix-blend-overlay"></div>
        {/* Texture */}
        <div className="absolute inset-0 bg-sparkle-pattern opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Header Section with Oscar Statue silhouette vibe */}
        <header className="w-full pt-12 pb-6 flex flex-col items-center justify-center">
            <div className="w-16 h-1 bg-gold-500 mb-8 rounded-full shadow-[0_0_10px_rgba(212,165,35,0.8)]"></div>
            <CountdownTimer />
        </header>

        <main className="w-full px-4">
          
          {/* THE STAR MODULE - Main Feature */}
          <section id="interactive-module" className="animate-fade-in-up">
            <RedCarpetGenerator />
          </section>

          {/* Invitation Text */}
          <section className="mt-12">
             <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-700 to-transparent opacity-50 my-8"></div>
             <InvitationDetails />
          </section>

        </main>

        <footer className="w-full py-8 text-center text-gold-800 text-xs font-sans border-t border-gold-900/30 bg-black/80 backdrop-blur-md">
          <p>© 2025 Corporate Events Team. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;