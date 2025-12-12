import React, { useState, useEffect } from 'react';
import { CountDownTime } from '../types';

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): CountDownTime => {
    // 26 Dec 2025 17:00
    const difference = +new Date('2025-12-26T17:00:00') - +new Date();
    
    let timeLeft: CountDownTime = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<CountDownTime>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center border border-amber-500/30 bg-black/50 backdrop-blur-sm rounded-lg shadow-[0_0_15px_rgba(180,83,9,0.2)]">
        <span className="text-2xl md:text-4xl font-serif text-amber-400 font-bold">{value < 10 ? `0${value}` : value}</span>
      </div>
      <span className="mt-2 text-xs md:text-sm text-amber-200 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center py-8">
      <TimeUnit value={timeLeft.days} label="Дней" />
      <TimeUnit value={timeLeft.hours} label="Часов" />
      <TimeUnit value={timeLeft.minutes} label="Минут" />
      <TimeUnit value={timeLeft.seconds} label="Секунд" />
    </div>
  );
};

export default Countdown;
