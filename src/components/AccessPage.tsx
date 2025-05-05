import React, { useState } from 'react';

// Simulated registered emails (replace with backend/API later)
const registeredUsers = [
  { email: 'demo@email.com', name: 'Demo User' },
  // Puedes agregar más emails de prueba aquí
];

const exampleBonuses = [
  { title: 'Your Wish Is Your Command', type: 'audio', placeholder: '[Audio link here]' },
  { title: 'TFT Mastery Course', type: 'video', placeholder: '[Video link here]' },
];

const exampleCourses = [
  {
    title: 'The Game Changer Method',
    modules: [
      { title: 'Module 1: Foundations', lessons: ['Lesson 1: Mindset', 'Lesson 2: Vision'] },
      { title: 'Module 2: Action', lessons: ['Lesson 1: Habits', 'Lesson 2: Execution'] },
    ],
  },
];

const AccessPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<{ email: string; name?: string } | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'book' | 'bonuses' | 'courses'>('book');

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
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center px-2 py-8 md:py-16">
        <div className="max-w-5xl w-full bg-gray-900 rounded-2xl shadow-2xl border border-yellow-500 flex flex-col md:flex-row overflow-hidden">
          {/* Sidebar */}
          <nav className="bg-gradient-to-b from-yellow-500 to-yellow-700 md:w-56 flex md:flex-col flex-row md:items-start items-center justify-between md:justify-start p-4 gap-4">
            <button onClick={() => setSelectedTab('book')} className={`font-bold px-4 py-2 rounded-lg transition ${selectedTab === 'book' ? 'bg-black text-yellow-400' : 'text-black hover:bg-yellow-400/30'}`}>Book</button>
            <button onClick={() => setSelectedTab('bonuses')} className={`font-bold px-4 py-2 rounded-lg transition ${selectedTab === 'bonuses' ? 'bg-black text-yellow-400' : 'text-black hover:bg-yellow-400/30'}`}>Bonuses</button>
            <button onClick={() => setSelectedTab('courses')} className={`font-bold px-4 py-2 rounded-lg transition ${selectedTab === 'courses' ? 'bg-black text-yellow-400' : 'text-black hover:bg-yellow-400/30'}`}>Courses</button>
          </nav>

          {/* Main Content */}
          <div className="flex-1 p-6 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">Welcome, {user.name || user.email}!</h2>
            <p className="text-lg text-gray-200 mb-8">Access your <span className="font-bold text-yellow-300">Game Changer</span> content below.</p>

            {selectedTab === 'book' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">📕 Your Book</h3>
                <div className="bg-black bg-opacity-40 rounded-lg p-6 border border-yellow-500 mb-4">
                  <span className="text-yellow-400">[Book PDF download or view link here]</span>
                </div>
              </div>
            )}

            {selectedTab === 'bonuses' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">🎁 Your Bonuses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {exampleBonuses.map((bonus, idx) => (
                    <div key={idx} className="bg-black bg-opacity-40 rounded-lg p-6 border border-yellow-500">
                      <h4 className="text-xl font-bold text-yellow-400 mb-2">{bonus.title}</h4>
                      <span className="text-yellow-400">{bonus.placeholder}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'courses' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">🎓 Your Courses</h3>
                {exampleCourses.map((course, idx) => (
                  <div key={idx} className="mb-8">
                    <h4 className="text-xl font-bold text-yellow-400 mb-2">{course.title}</h4>
                    <div className="space-y-4">
                      {course.modules.map((mod, mIdx) => (
                        <div key={mIdx} className="bg-black bg-opacity-40 rounded-lg p-4 border border-yellow-500">
                          <h5 className="text-lg font-bold text-white mb-2">{mod.title}</h5>
                          <ul className="list-disc list-inside text-gray-300">
                            {mod.lessons.map((lesson, lIdx) => (
                              <li key={lIdx}>{lesson}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8">
              <a href="mailto:soporte@thegamechangerbooks.com" className="text-yellow-400 underline">Need help? Contact support</a>
            </div>
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