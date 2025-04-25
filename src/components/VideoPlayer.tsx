import React, { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  videoHash?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // URL para el video de fondo (muted, loop)
  const bgVideoSrc = `https://player.vimeo.com/video/${videoId}${
    videoHash ? `?h=${videoHash}&` : '?'
  }background=1&loop=1&autopause=0&muted=1&controls=0&playsinline=1`;

  // URL para el video con sonido
  const mainVideoSrc = `https://player.vimeo.com/video/${videoId}${
    videoHash ? `?h=${videoHash}&` : '?'
  }transparent=1&playsinline=1&controls=0&autopause=0`;

  useEffect(() => {
    // Escuchar mensajes del iframe de Vimeo
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://player.vimeo.com') return;
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data.event === 'play') {
          setIsPlaying(true);
        } else if (data.event === 'pause') {
          setIsPlaying(false);
        }
      } catch (error) {
        console.error('Error handling Vimeo message:', error);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleClick = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      // Pequeño delay para asegurar que el iframe está listo
      setTimeout(() => {
        if (playerRef.current) {
          playerRef.current.contentWindow?.postMessage({
            method: 'play'
          }, 'https://player.vimeo.com');
        }
      }, 100);
    } else if (playerRef.current) {
      playerRef.current.contentWindow?.postMessage({
        method: isPlaying ? 'pause' : 'play'
      }, 'https://player.vimeo.com');
    }
  };

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_0_50px_rgba(236,201,75,0.1)] cursor-pointer"
      onClick={handleClick}
    >
      {!hasInteracted ? (
        // Video de fondo sin sonido
        <iframe
          src={bgVideoSrc}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        // Video principal con sonido
        <iframe
          ref={playerRef}
          src={mainVideoSrc}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

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
