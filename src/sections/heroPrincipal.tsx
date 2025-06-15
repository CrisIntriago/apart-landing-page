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
      // Mantener el texto visible pero no animado
      gsap.fromTo(
        titleRef.current,
        { y: -100, opacity: 0 }, // Empieza desde arriba sin ser invisible
        { y: 0, opacity: 1 , duration: 1, ease: "power3.out" , delay:1}
      );
    }

    // Animación de fade-in para el botón
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.2,
          delay: 1.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className={`${isAbsolute ? "" : "relative"} min-h-screen flex flex-col items-center justify-center`}>
      <div>
        <VideoComponent
          className="absolute top-0 left-0 w-full min-h-screen object-cover z-0"
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
