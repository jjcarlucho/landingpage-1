import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
  videoSrc?: string; // Por defecto VSL.mp4
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc = '/VSL.mp4' }) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cuando el usuario hace click en el overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasInteracted) {
      setHasInteracted(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Play/Pause invisible al hacer click en el video
  const handleVideoClick = () => {
    if (hasInteracted && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
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
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_0_50px_rgba(236,201,75,0.1)] cursor-pointer"
      onClick={handleVideoClick}
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

      {/* Overlay premium solo antes del primer play */}
      {!hasInteracted && (
        <div
          className="absolute inset-0 flex items-center justify-center z-10 animate-fadein"
          onClick={handleOverlayClick}
        >
          <div
            className="flex flex-col items-center justify-center px-10 py-10 rounded-3xl shadow-2xl backdrop-blur-xl"
            style={{ background: 'rgba(236,201,75,0.70)', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
          >
            {/* SVG animado volumen muteado premium */}
            <svg
              className="w-24 h-24 mb-6 animate-wiggle"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect x="16" y="24" width="12" height="16" rx="4" fill="#fff" />
                <polygon points="28,24 44,12 44,52 28,40" fill="#fff" />
                <line x1="18" y1="18" x2="46" y2="46" stroke="#b8860b" strokeWidth="6" strokeLinecap="round" />
              </g>
            </svg>
            <span
              className="text-2xl font-bold text-white tracking-wide text-center"
              style={{
                fontFamily: 'Inter, sans-serif',
                textShadow: '0 2px 8px #0007',
                letterSpacing: '0.04em',
                lineHeight: 1.2,
              }}
            >
              Click to enable sound
            </span>
          </div>
          <style>{`
            @keyframes wiggle {
              0%, 100% { transform: rotate(-8deg); }
              20% { transform: rotate(8deg); }
              40% { transform: rotate(-6deg); }
              60% { transform: rotate(6deg); }
              80% { transform: rotate(-4deg); }
            }
            .animate-wiggle { animation: wiggle 1.2s infinite; }
            @keyframes fadein {
              from { opacity: 0; transform: scale(0.96); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fadein { animation: fadein 0.7s cubic-bezier(.4,0,.2,1) both; }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
