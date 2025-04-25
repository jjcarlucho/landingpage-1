import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  videoHash?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoHash }) => {
  const vimeoSrc = `https://player.vimeo.com/video/${videoId}${
    videoHash ? `?h=${videoHash}` : ''
  }`;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%' /* 16:9 */,
      }}
      className="rounded-xl overflow-hidden bg-black shadow-[0_0_50px_rgba(236,201,75,0.1)]"
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
