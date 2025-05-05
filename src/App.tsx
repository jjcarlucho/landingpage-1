import React, { lazy, Suspense, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LazyComponent from './components/LazyComponent';
import PageLoader from './components/PageLoader';
import VSL from './components/VSL';
import { Routes, Route } from 'react-router-dom';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const ExclusiveBonuses = lazy(() => import('./components/ExclusiveBonuses'));
const StorySection = lazy(() => import('./components/StorySection'));
const Benefits = lazy(() => import('./components/Benefits'));
const Decision = lazy(() => import('./components/Decision'));
const UltimateCTA = lazy(() => import('./components/FinalCTA'));
const StickyCTA = lazy(() => import('./components/StickyCTA'));
const AccessPage = lazy(() => import('./components/AccessPage'));

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
    <>
      <div style={{position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999, background: 'red', color: 'white', textAlign: 'center', fontWeight: 'bold', padding: '8px'}}>DEBUG: App is rendering</div>
      <AnimatePresence>
        {isLoading && <PageLoader />}
      </AnimatePresence>

      <div className="w-full bg-gradient-to-b from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] min-h-screen">
        <VSL />
        <LazyComponent>
          <Hero />
        </LazyComponent>
        <LazyComponent>
          <ExclusiveBonuses />
        </LazyComponent>
        <LazyComponent>
          <StorySection />
        </LazyComponent>
        <LazyComponent>
          <Benefits />
        </LazyComponent>
        <LazyComponent>
          <Decision />
        </LazyComponent>
        <LazyComponent>
          <UltimateCTA />
        </LazyComponent>
        <LazyComponent>
          <StickyCTA />
        </LazyComponent>
      </div>

      <Routes>
        <Route path="/access" element={<AccessPage />} />
      </Routes>
    </>
  );
};

export default App;