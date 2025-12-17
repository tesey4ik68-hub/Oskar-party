import React, { useState, useEffect } from 'react';

const EVENT_DATE = new Date('2025-12-26T17:00:00');

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +EVENT_DATE - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Event passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="text-3xl md:text-5xl font-cinzel font-bold text-gold-400 gold-text-shadow backdrop-blur-sm bg-black/30 p-2 md:p-4 rounded-lg border border-gold-500/30">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-xs md:text-sm uppercase tracking-widest text-gold-200 mt-2 font-sans">{label}</span>
    </div>
  );

  return (
    <div className="w-full py-8 md:py-12 flex flex-col items-center justify-center relative z-10">
      <h3 className="text-gold-100 font-serif italic text-lg mb-6 tracking-wider">До начала церемонии осталось:</h3>
      <div className="flex flex-wrap justify-center">
        <TimeUnit value={timeLeft.days} label="Дней" />
        <TimeUnit value={timeLeft.hours} label="Часов" />
        <TimeUnit value={timeLeft.minutes} label="Минут" />
        <TimeUnit value={timeLeft.seconds} label="Секунд" />
      </div>
    </div>
  );
};

export default CountdownTimer;