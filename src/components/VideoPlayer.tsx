import React, { useRef, useState } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer group">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        onClick={togglePlay}
        poster="/thumbnail.jpg"
      >
        <source src="/vsl.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay that only shows before first play */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/50"
          onClick={togglePlay}
        >
          <div className="w-20 h-20 rounded-full bg-[#ecc94b]/20 border border-[#ecc94b]/30 flex items-center justify-center">
            <span className="text-4xl text-[#ecc94b]">▶</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
