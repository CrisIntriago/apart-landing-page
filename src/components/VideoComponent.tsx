"use client"
import React, { useRef, useEffect } from "react";

interface VideoComponentProps {
  url: string;
  className?: string;
  rounded?: boolean;
  delay?: number; // Nuevo parámetro para el retraso en milisegundos
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  url,
  className = "",
  rounded = false,
  delay = 0, // Valor por defecto para delay
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      const playVideo = () => {
        videoElement.play(); // Inicia la reproducción del video
      };

      // Si el retraso es mayor que 0, se establece un retraso con setTimeout
      if (delay > 0) {
        const timeoutId = setTimeout(playVideo, delay);
        return () => clearTimeout(timeoutId); // Limpiar el timeout si el componente se desmonta
      } else {
        playVideo(); // Si no hay retraso, se inicia inmediatamente
      }
    }
  }, [delay]);

  return (
    <video
      ref={videoRef}
      className={`${className} ${rounded ? "rounded-3xl" : ""} pointer-events-none`}
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
