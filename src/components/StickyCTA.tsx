import React from 'react';
import { Sparkles } from 'lucide-react';
import RegisterCTA from './RegisterCTA';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black p-4 z-50 transform transition-transform duration-300 hover:scale-105 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-black" />
            <h3 className="text-xl font-bold">⚠️ LAST CHANCE! ⚠️</h3>
          </div>
          <p className="text-lg font-semibold">Premium Edition COMPLETELY FREE + $1,294 in Bonuses</p>
        </div>
        <RegisterCTA className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105 shadow-lg border-2 border-black hover:border-yellow-400">
          GET FREE ACCESS NOW!
        </RegisterCTA>
      </div>
    </div>
  );
};

export default StickyCTA;
