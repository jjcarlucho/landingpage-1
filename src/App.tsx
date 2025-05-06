import React, { lazy, Suspense, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext';
import QueryProvider from './context/QueryProvider';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Toaster from './components/Toaster';
import Analytics from './components/Analytics';
import PageLoader from './components/PageLoader';
import VSL from './components/VSL';
import Hero from './components/Hero';
import ExclusiveBonuses from './components/ExclusiveBonuses';
import StorySection from './components/StorySection';
import Benefits from './components/Benefits';
import Decision from './components/Decision';
import FinalCTA from './components/FinalCTA';
import StickyCTA from './components/StickyCTA';
import AccessPage from './components/AccessPage';

const LazyWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial resources loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <QueryProvider>
        <AuthProvider>
          <ModalProvider>
            <Analytics />
            <div style={{position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999, background: 'red', color: 'white', textAlign: 'center', fontWeight: 'bold', padding: '8px'}}>DEBUG: App is rendering</div>
            <AnimatePresence>
              {isLoading && <PageLoader />}
            </AnimatePresence>

            <Routes>
              {/* Rutas públicas */}
              <Route path="/login" element={<Login />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/access" element={<AccessPage />} />
              
              {/* Rutas protegidas del dashboard */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* Rutas protegidas del admin */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin>
                    <DashboardLayout>
                      <div className="p-6">
                        <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Usuarios</h2>
                            <p className="text-gray-600">Gestiona los usuarios registrados</p>
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Libros</h2>
                            <p className="text-gray-600">Administra los libros disponibles</p>
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Bonos</h2>
                            <p className="text-gray-600">Gestiona los bonos y recursos adicionales</p>
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
                            <p className="text-gray-600">Visualiza métricas y reportes</p>
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Notificaciones</h2>
                            <p className="text-gray-600">Envía mensajes a los usuarios</p>
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Configuración</h2>
                            <p className="text-gray-600">Ajusta la configuración del sistema</p>
                          </div>
                        </div>
                      </div>
                    </DashboardLayout>
                  </ProtectedRoute>
                }
              />

              {/* Ruta principal */}
              <Route
                path="/"
                element={
                  <Layout>
                    <div className="w-full bg-gradient-to-b from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] min-h-screen">
                      <VSL />
                      <LazyWrapper>
                        <Hero />
                      </LazyWrapper>
                      <LazyWrapper>
                        <ExclusiveBonuses />
                      </LazyWrapper>
                      <LazyWrapper>
                        <StorySection />
                      </LazyWrapper>
                      <LazyWrapper>
                        <Benefits />
                      </LazyWrapper>
                      <LazyWrapper>
                        <Decision />
                      </LazyWrapper>
                      <LazyWrapper>
                        <FinalCTA />
                      </LazyWrapper>
                      <LazyWrapper>
                        <StickyCTA />
                      </LazyWrapper>
                    </div>
                  </Layout>
                }
              />
            </Routes>
            <Toaster />
          </ModalProvider>
        </AuthProvider>
      </QueryProvider>
    </Router>
  );
};

export default App;