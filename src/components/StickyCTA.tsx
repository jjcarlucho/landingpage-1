import React from 'react';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-4 z-50 transform transition-transform duration-300 hover:scale-105">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">⚠️ LAST CHANCE! ⚠️</h3>
          <p className="text-lg">Premium Edition COMPLETELY FREE + $1300 in Bonuses</p>
        </div>
        <button className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105 shadow-lg">
          GET FREE ACCESS NOW!
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
