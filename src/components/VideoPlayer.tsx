import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  videoHash?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  // Construimos la URL con los parámetros necesarios:
  // - controls=0 oculta los controles
  // - background=1 oculta el logo y botones
  // - autopause=0 evita que se pause al scrollear
  // - playsinline=1 reproduce en el mismo contenedor
  const vimeoSrc = `https://player.vimeo.com/video/${videoId}${
    videoHash ? `?h=${videoHash}&` : '?'
  }controls=0&background=1&autopause=0&playsinline=1&transparent=1`;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%' /* 16:9 */,
      }}
      className="rounded-xl overflow-hidden bg-black shadow-[0_0_50px_rgba(236,201,75,0.1)] cursor-pointer"
      onClick={() => {
        // Enviamos mensaje al iframe para alternar play/pause
        const iframe = document.querySelector('iframe');
        if (iframe) {
          iframe.contentWindow?.postMessage('{"method":"play"}', '*');
        }
      }}
    >
      <iframe
        src={vimeoSrc}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
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
