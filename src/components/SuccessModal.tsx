import React from 'react';

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full mx-4 border border-green-500">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            ¡Felicidades! ¡Eres Parte del Cambio!
          </h3>
          <p className="text-gray-300 mb-6">
            En unos minutos recibirás un email con:
          </p>
          <ul className="text-left text-gray-300 space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Acceso al libro digital
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Instrucciones para los bonos
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Acceso a la comunidad
            </li>
          </ul>
          <p className="text-gray-400 text-sm mb-6">
            Revisa tu bandeja de entrada y la carpeta de spam si no encuentras el email.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-black font-bold rounded-lg py-3 px-4 hover:from-green-400 hover:to-green-500 transform hover:scale-105 transition-all duration-300"
          >
            ¡Entendido!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal; 