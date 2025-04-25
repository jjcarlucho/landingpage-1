import React from 'react';
import Hero from './components/Hero';
import VSL from './components/VSL';
import ProductImages from './components/ProductImages';
import StorySection from './components/StorySection';
import Benefits from './components/Benefits';
import Decision from './components/Decision';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] min-h-screen">
      <Hero />
      <VSL />
      <StorySection />
      <ProductImages />
      <Benefits />
      <Decision />
      <Pricing />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;