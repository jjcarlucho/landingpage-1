import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import SuccessModal from './SuccessModal';
import { registerUser, sendWelcomeEmail } from '../api/register';

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Registrar usuario
      await registerUser(formData);
      
      // Enviar email de bienvenida
      await sendWelcomeEmail(formData.email);
      
      // Mostrar modal de éxito
      setIsModalOpen(false);
      setIsSuccessModalOpen(true);
      
      // Resetear formulario
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error en el registro:', error);
      // Aquí podríamos mostrar un mensaje de error
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            ¡Tu Momento de Transformación es AHORA!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Únete a los visionarios que están cambiando sus vidas
          </p>
          
          <CountdownTimer />
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl p-8 border border-yellow-500">
            <div className="text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
                EDICIÓN PREMIUM
              </div>
              <div className="flex justify-center items-baseline">
                <span className="text-6xl font-bold text-yellow-400">GRATIS</span>
                <span className="text-2xl text-gray-400 ml-2 line-through">$297</span>
              </div>
              <p className="text-gray-400 mt-2">Valor real: $1,597</p>
            </div>

            <div className="mt-8 bg-black bg-opacity-40 p-6 rounded-lg border border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">✨ Bono Exclusivo ✨</h3>
              <p className="text-xl text-white mb-2">$1,294 en Bonos Premium</p>
              <p className="text-gray-300">Incluye acceso a recursos exclusivos y mentoría personalizada</p>
            </div>

            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Acceso VIP al libro digital premium
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                $1,294 en bonos exclusivos para tu transformación
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Actualizaciones premium de por vida
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Acceso a comunidad exclusiva de visionarios
              </li>
            </ul>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg py-4 px-4 mt-8 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              ¡ÚNETE A LOS VISIONARIOS AHORA!
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">🔥 Solo 23 copias disponibles</p>
              <p className="text-xs text-gray-500 mt-2">Esta oferta es exclusiva y no se repetirá</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Registro */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full mx-4 border border-yellow-500">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
              ¡Último Paso para tu Transformación!
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Número de Teléfono</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg py-3 px-4 mt-4 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300"
              >
                ¡Obtener Acceso GRATIS!
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Modal de Éxito */}
      {isSuccessModalOpen && (
        <SuccessModal onClose={() => setIsSuccessModalOpen(false)} />
      )}
    </section>
  );
};

export default Pricing;