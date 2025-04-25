import React, { lazy, Suspense, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LazyComponent from './components/LazyComponent';
import PageLoader from './components/PageLoader';
import VSL from './components/VSL';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const ExclusiveBonuses = lazy(() => import('./components/ExclusiveBonuses'));
const StorySection = lazy(() => import('./components/StorySection'));
const Benefits = lazy(() => import('./components/Benefits'));
const Decision = lazy(() => import('./components/Decision'));
const UltimateCTA = lazy(() => import('./components/FinalCTA'));
const StickyCTA = lazy(() => import('./components/StickyCTA'));

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
        <StickyCTA />
      </div>
    </>
  );
};

export default App;