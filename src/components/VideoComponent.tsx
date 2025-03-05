import React from "react";

interface VideoComponentProps {
  url: string;
  className?: string;
  rounded?: boolean; // Prop opcional para bordes redondeados
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  url,
  className = "",
  rounded = false,
}) => {
  return (
    <video
      className={`${className} ${rounded ? "rounded-3xl" : ""}`}
      autoPlay
      loop
      muted
    >
      <source
        src={`${process.env.NEXT_PUBLIC_CDN_URL + url}`}
        type="video/webm"
      />
      Tu navegador no soporta el formato de video.
    </video>
  );
};

export default VideoComponent;
