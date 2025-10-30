import { useState, useEffect } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const launchDate = new Date('2025-12-01T00:00:00').getTime(); // Customize here

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="glass p-6 rounded-2xl text-center neon-glow">
          <div className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-black text-white mb-1">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base font-inter text-gray-300 uppercase tracking-wider">
            {key.slice(0, -1)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countdown;