import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
  videoSrc?: string; // Ahora opcional, por defecto VSL.mp4
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc = '/VSL.mp4' }) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cuando el usuario hace click en el botón de play
  const handlePlayClick = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }
    }
  };

  // Cuando termina el video
  const handleEnded = () => {
    setIsPlaying(false);
    setHasInteracted(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  };

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_0_50px_rgba(236,201,75,0.1)] cursor-pointer group"
      onClick={handlePlayClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Video HTML5 */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted={!hasInteracted}
        autoPlay
        loop={!hasInteracted}
        playsInline
        onEnded={handleEnded}
        style={{ pointerEvents: 'none' }}
      />

      {/* Overlay del botón de play inicial */}
      {!hasInteracted && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity hover:bg-black/50">
          <div className="relative">
            {/* Anillos pulsantes */}
            <div className="absolute -inset-4 bg-[#ecc94b]/20 rounded-full animate-ping"></div>
            <div className="absolute -inset-8 bg-[#ecc94b]/10 rounded-full animate-pulse"></div>
            {/* Botón principal */}
            <div className="relative w-32 h-32 rounded-full bg-[#ecc94b]/30 border-2 border-[#ecc94b] flex items-center justify-center transform hover:scale-105 transition-transform">
              <span className="text-6xl text-[#ecc94b] drop-shadow-lg">▶</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
