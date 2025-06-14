"use client";
import { useEffect, useRef, useState } from "react";
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
  placeholderUrl?: string;
}

export default function HeroPrincipal({
  url,
  title,
  description,
  buttonText,
  buttonLink,
  isAbsolute = false,
  placeholderUrl,
}: VideoProps) {
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Estado para manejar la visibilidad del contenido
  const [isVisible, setIsVisible] = useState(false);

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
          delay: 2, // Añadir un pequeño retraso antes de la animación
          y: 0, // Finaliza en su posición original
          opacity: 1, // Se vuelve completamente visible
          duration: 1.5, // Duración de la animación
          ease: "power3.out", // Tipo de easing para la animación
          onComplete: () => setIsVisible(true), // Cuando termine la animación, hacer visible el contenido
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
          duration: 1, // Duración de la animación
          delay: 2.5,
          ease: "power3.out", // Tipo de easing para la animación
        }
      );
    }
  }, [title]);

  return (
    <div className={`${isAbsolute ? "" : "relative"} min-h-screen flex flex-col items-center justify-center`}>
      <VideoComponent
        className="absolute top-0 left-0 w-full min-h-screen object-cover z-0"
        url={url}
        placeholderUrl={placeholderUrl}
      />
      <div className="relative inset-0 flex flex-col items-center justify-center text-white font-guru z-10">
        {/* Solo mostrar el título después de que se complete la animación */}
        {isVisible && (
          <>
            <p ref={titleRef} className="md:text-7xl text-5xl font-bold text-center">
              {title}
            </p>
            {description && (
              <p className="md:text-2xl text-lg mt-4 text-center">{description}</p>
            )}
            {buttonText && (
              <Link href={buttonLink}>
                <button ref={buttonRef} className="border-2 border-white rounded-full mt-6 w-auto max-w-xs hover:bg-[#4d4d4d] transition-all duration-300">
                  <p className="md:text-2xl text-lg p-3 px-10 font-bold text-center">{buttonText}</p>
                </button>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}
