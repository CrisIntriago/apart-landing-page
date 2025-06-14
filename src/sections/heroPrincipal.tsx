"use client";
import { useEffect, useRef } from "react";
import VideoComponent from "@/components/VideoComponent";
import Link from "next/link";
import gsap from "gsap";

interface VideoProps {
  url: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink: string;
  isAbsolute?: boolean;
  placeholderUrl?: string; // Cambia el nombre para coincidir con VideoComponent
}

export default function HeroPrincipal({
  url,
  title,
  description,
  buttonText,
  buttonLink,
  isAbsolute = false,
  placeholderUrl, // Cambia el nombre aquí también
}: VideoProps) {
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Animación de reveal para el título
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          y: -100, // Comienza desplazado hacia arriba
          opacity: 0, // Comienza invisible
        },
        {
          delay: 1, // Añadir un pequeño retraso antes de la animación
          y: 0, // Finaliza en su posición original
          opacity: 1, // Se vuelve completamente visible
          duration:1, // Duración de la animación
          ease: "power3.out", // Tipo de easing para la animación
        }
      );
    }

    // Animación de fade-in para el botón
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0, // Comienza invisible
        },
        {
          opacity: 1, // Se vuelve completamente visible
          duration: 0.2, // Duración de la animación
          delay: 1.2,
          ease: "power3.out", // Tipo de easing para la animación
        }
      );
    }
  }, []);

  return (
    <div className={`${isAbsolute ? "" : "relative"} min-h-screen flex flex-col items-center justify-center`}>
      <div className="absolute top-0 left-0 w-full min-h-screen object-cover z-0">
        <VideoComponent
          url={url}
          placeholderUrl={placeholderUrl} // Usa el placeholderUrl como poster
        />
      </div>
      <div className="relative inset-0 flex flex-col items-center justify-center text-white font-guru z-10">
        <p ref={titleRef} className="md:text-7xl text-5xl font-bold text-center opacity-0">
          {title}
        </p>
        {description && (
          <p className="md:text-2xl text-lg mt-4 text-center">{description}</p>
        )}
        {buttonText && (
          <Link href={buttonLink}>
            <button ref={buttonRef} className="border-2 border-white rounded-full mt-6 w-auto max-w-xs hover:bg-[#4d4d4d] transition-all duration-300 opacity-0">
              <p className="md:text-2xl text-lg p-3 px-10 font-bold text-center">{buttonText}</p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
