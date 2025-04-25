import React from 'react';
import VideoPlayer from './VideoPlayer';

const VSL: React.FC = () => {
  return (
    <section className="relative bg-black pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-[#ecc94b] to-amber-200 bg-clip-text text-transparent">Discover The</span>
              <span className="text-[#ecc94b]"> One-Book System </span>
              <span className="bg-gradient-to-r from-white via-[#ecc94b] to-amber-200 bg-clip-text text-transparent">That Helped</span>
              <br />
              <span className="text-white">1,847+ Authors</span>
              <br />
              <span className="bg-gradient-to-r from-white via-[#ecc94b] to-amber-200 bg-clip-text text-transparent">Turn Their Knowledge Into</span>
              <span className="text-[#ecc94b]"> $5,000+ </span>
              <br />
              <span className="bg-gradient-to-r from-white via-[#ecc94b] to-amber-200 bg-clip-text text-transparent">Monthly Income</span>
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto mb-6">
              Without spending thousands on marketing or being a bestselling author
            </p>
            <p className="text-xl text-[#ecc94b] flex items-center justify-center gap-2 mb-12 font-medium">
              <span className="inline-block">🔊</span> Click play to enable sound and discover your path to success
            </p>
          </div>
          
          <div className="relative z-10">
            <VideoPlayer videoId="123456789" videoHash="abcdef" />
          </div>
        </div>
      </div>
      
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ecc94b]/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ecc94b]/20 rounded-full blur-[90px] animate-pulse animation-delay-1000"></div>
      </div>
    </section>
  );
};

export default VSL;
