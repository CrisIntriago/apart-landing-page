import React from "react";

interface VideoComponentProps {
  url: string,
  className?: string,
}

const VideoComponent: React.FC<VideoComponentProps> = ({ url , className = ""}) => {
  return (
    <video className= {`${className}`} autoPlay loop muted>
      <source src={`${process.env.NEXT_PUBLIC_CDN_URL+url}`} type="video/webm" />
      Tu navegador no soporta el formato de video.
    </video>
  );
};

export default VideoComponent;
