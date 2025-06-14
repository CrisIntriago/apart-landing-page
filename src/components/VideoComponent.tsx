"use client"
interface VideoComponentProps {
  url: string;
  className?: string;
  rounded?: boolean;
  placeholderUrl?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  url,
  className = "",
  rounded = false,
  placeholderUrl,
}) => {
  return (
    <video
      className={`${className} ${rounded ? "rounded-3xl" : ""} pointer-events-none`}
      loop
      muted
      playsInline
      style={{ userSelect: 'none' }}
      autoPlay
      preload="auto"
      {...(placeholderUrl ? { poster: `${process.env.NEXT_PUBLIC_CDN_URL + placeholderUrl}` } : {})}
    >
      <source
      src={`${process.env.NEXT_PUBLIC_CDN_URL + url}`}
      type="video/mp4"
      />
      Tu navegador no soporta el formato de video.
    </video>
  );
};

export default VideoComponent;
