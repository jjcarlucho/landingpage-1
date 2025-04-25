import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  videoHash?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  // URL del iframe simplificada: Solo ID y hash de privacidad (si existe)
  // Quitamos badge, autopause, player_id, app_id, controls, dnt por ahora para probar
  const vimeoSrc = `https://player.vimeo.com/video/${videoId}${
    videoHash ? `?h=${videoHash}` : ''
  }`;

  return (
    // Contenedor con padding-top para aspect ratio 16:9 y relative
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%' /* 16:9 */,
      }}
      className="rounded-xl overflow-hidden bg-black"
    >
      <iframe
        src={vimeoSrc}
        frameBorder="0"
        // Mantenemos los permisos básicos
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        title="VSL Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
