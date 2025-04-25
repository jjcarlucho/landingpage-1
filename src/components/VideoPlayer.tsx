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

  // URL para el video principal (con API habilitada)
  const mainVideoSrc = `https://player.vimeo.com/video/${videoId}${
    videoHash ? `?h=${videoHash}&` : '?'
  }autoplay=0&autopause=0&controls=0&api=1`;

  useEffect(() => {
    let player: any = null;

    const initializeVimeoPlayer = () => {
      if (!hasInteracted || !playerRef.current) return;

      // @ts-ignore
      if (typeof Vimeo === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        script.onload = () => {
          // @ts-ignore
          player = new Vimeo.Player(playerRef.current);
          setupPlayerEvents(player);
        };
        document.body.appendChild(script);
      } else {
        // @ts-ignore
        player = new Vimeo.Player(playerRef.current);
        setupPlayerEvents(player);
      }
    };

    const setupPlayerEvents = (player: any) => {
      player.on('play', () => setIsPlaying(true));
      player.on('pause', () => setIsPlaying(false));
      player.ready().then(() => {
        console.log('Vimeo player is ready');
      });
    };

    initializeVimeoPlayer();

    return () => {
      if (player) {
        player.unload();
      }
    };
  }, [hasInteracted, videoId]);

  const handleClick = async () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    } else {
      try {
        // @ts-ignore
        const player = new Vimeo.Player(playerRef.current);
        if (isPlaying) {
          await player.pause();
        } else {
          await player.play();
        }
      } catch (error) {
        console.error('Error controlling video:', error);
      }
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
    </div>
  );
};

export default VideoPlayer;
