import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        }
        if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        }
        if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 rounded-lg mb-6 transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-bold mb-2 text-center">⚠️ ¡ÚLTIMA OPORTUNIDAD! ⚠️</h3>
      <p className="text-center mb-4 text-yellow-200">Esta oferta expira en:</p>
      <div className="flex justify-center space-x-4">
        <div className="text-center bg-black bg-opacity-30 p-3 rounded-lg">
          <div className="text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-sm">Horas</div>
        </div>
        <div className="text-4xl font-bold self-center">:</div>
        <div className="text-center bg-black bg-opacity-30 p-3 rounded-lg">
          <div className="text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-sm">Minutos</div>
        </div>
        <div className="text-4xl font-bold self-center">:</div>
        <div className="text-center bg-black bg-opacity-30 p-3 rounded-lg">
          <div className="text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-sm">Segundos</div>
        </div>
      </div>
      <p className="text-center mt-4 text-yellow-200 font-semibold">
        ⚡ ¡Solo para los primeros 50 visionarios! ⚡
      </p>
    </div>
  );
};

export default CountdownTimer; 