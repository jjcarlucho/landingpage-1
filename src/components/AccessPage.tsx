import React, { useState } from 'react';

// Simulated registered emails (replace with backend/API later)
const registeredUsers = [
  { email: 'demo@email.com', name: 'Demo User' },
  // Puedes agregar más emails de prueba aquí
];

const AccessPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<{ email: string; name?: string } | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const found = registeredUsers.find(u => u.email === email.trim().toLowerCase());
      if (found) {
        setUser(found);
        setError('');
      } else {
        setError('Email not found. Please register first or check your email.');
        setUser(null);
      }
      setLoading(false);
    }, 800);
  };

  if (user) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-gray-900 rounded-2xl shadow-2xl border border-yellow-500 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">Welcome, {user.name || user.email}!</h2>
          <p className="text-lg text-gray-200 mb-8">Here is your access to <span className="font-bold text-yellow-300">The Game Changer Book</span> and all your exclusive bonuses.</p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">📕 Your Book</h3>
            <div className="bg-black bg-opacity-40 rounded-lg p-4 border border-yellow-500 mb-2">
              <span className="text-yellow-400">[Book download or view link here]</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">🎁 Your Bonuses</h3>
            <div className="bg-black bg-opacity-40 rounded-lg p-4 border border-yellow-500 mb-2">
              <span className="text-yellow-400">[Bonuses links or content here]</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">🎓 Your Courses</h3>
            <div className="bg-black bg-opacity-40 rounded-lg p-4 border border-yellow-500 mb-2">
              <span className="text-yellow-400">[Courses/videos/resources here]</span>
            </div>
          </div>

          <div className="mt-6">
            <a href="mailto:soporte@thegamechangerbooks.com" className="text-yellow-400 underline">Need help? Contact support</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-gray-900 rounded-2xl shadow-2xl border border-yellow-500 p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">Access Your Book & Bonuses</h2>
        <p className="text-gray-300 mb-6">Enter the email you used to register and unlock your content.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg py-3 px-4 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
            disabled={loading}
          >
            {loading ? 'Checking...' : 'Access Now'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="mt-6 text-gray-400 text-sm">
          Not registered? <a href="/" className="text-yellow-400 underline">Get your free book first</a>
        </div>
      </div>
    </section>
  );
};

export default AccessPage; 