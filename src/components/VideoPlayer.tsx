import React, { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  videoHash?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // URL para el video de fondo (muted, loop)
  const bgVideoSrc = `https://player.vimeo.com/video/${videoId}${
    videoHash ? `?h=${videoHash}&` : '?'
  }background=1&loop=1&autopause=0&muted=1&controls=0&playsinline=1`;

  // URL para el video principal (sin autoplay para evitar problemas)
  const mainVideoSrc = `https://player.vimeo.com/video/${videoId}${
    videoHash ? `?h=${videoHash}&` : '?'
  }muted=0&controls=0&loop=0&autopause=0&api=1&transparent=1`;

  useEffect(() => {
    if (hasInteracted && playerRef.current) {
      // @ts-ignore
      const player = new Vimeo.Player(playerRef.current);
      player.on('play', () => setIsPlaying(true));
      player.on('pause', () => setIsPlaying(false));
      
      // Reproducir el video manualmente después de la interacción
      player.play().then(() => {
        setIsPlaying(true);
      }).catch((error: any) => {
        console.error('Error playing video:', error);
      });
    }
  }, [hasInteracted]);

  const handleClick = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    } else {
      // @ts-ignore
      const player = new Vimeo.Player(playerRef.current);
      if (isPlaying) {
        player.pause();
      } else {
        player.play();
      }
    }
  };

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_0_50px_rgba(236,201,75,0.1)] cursor-pointer group"
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
        <>
          <iframe
            ref={playerRef}
            src={mainVideoSrc}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </>
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

      {/* Controles de play/pause que aparecen al hacer hover */}
      {hasInteracted && isHovering && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="pointer-events-auto w-20 h-20 rounded-full bg-[#ecc94b]/20 border border-[#ecc94b]/30 flex items-center justify-center transform hover:scale-110 transition-transform">
            <span className="text-4xl text-[#ecc94b] drop-shadow-lg">
              {isPlaying ? '❚❚' : '▶'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
