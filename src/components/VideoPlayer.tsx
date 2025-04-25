import React, { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  videoHash?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // Construimos la URL con los parámetros necesarios
  const vimeoSrc = `https://player.vimeo.com/video/${videoId}${
    videoHash ? `?h=${videoHash}&` : '?'
  }transparent=1&playsinline=1&background=0&autopause=0&player_id=vsl_player`;

  useEffect(() => {
    // Escuchamos los mensajes del iframe de Vimeo
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

  const togglePlay = () => {
    if (!playerRef.current) return;

    const message = isPlaying ? 'pause' : 'play';
    playerRef.current.contentWindow?.postMessage({
      method: message
    }, '*');
  };

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_0_50px_rgba(236,201,75,0.1)] cursor-pointer group"
      onClick={togglePlay}
    >
      <iframe
        ref={playerRef}
        src={vimeoSrc}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Overlay for initial play state */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/50">
          <div className="w-20 h-20 rounded-full bg-[#ecc94b]/20 border border-[#ecc94b]/30 flex items-center justify-center">
            <span className="text-4xl text-[#ecc94b]">▶</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
