"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoComponent from "./VideoComponent";

interface SectionInformationProps {
  image: string;
  eslogan: string;
  autor: string;
  descripcion: string;
  bgColor: string;
  inverted?: boolean;
  textWhite?: boolean;
}

const SectionInformation: React.FC<SectionInformationProps> = ({
  image,
  eslogan,
  autor,
  descripcion,
  bgColor,
  inverted = false,
  textWhite = false,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null); // Refs para cada sección

  // Función para verificar si el archivo es una imagen
  const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(image);

  useEffect(() => {
    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".section-content"), // Seleccionamos todos los elementos dentro de la sección
        {
          opacity: 0,
          x: inverted ? 100 : -100, // Cambia la dirección de la animación dependiendo de 'inverted'
        },
        {
          opacity: 1, // Termina visible
          x: 0, // Llega a su posición original
          scrollTrigger: {
            trigger: sectionRef.current, // Dispara la animación cuando la sección entra en la vista
            start: "top 80%", // Comienza cuando el 80% de la sección está en la vista
            end: "top 10%", // Termina cuando la sección llega al 30% de la ventana
            scrub: true, // Hace que la animación se sincronice con el desplazamiento
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef} // Asignamos la referencia a la sección
      className={`flex flex-col ${inverted ? "md:flex-row-reverse" : "md:flex-row"} 
            items-center justify-center sm:h-[600px]`}
      style={{
        backgroundColor: `#${bgColor}`,
        overflow: "hidden", // Aseguramos que no haya overflow no deseado
      }}
    >
      <div className="w-full md:w-1/2 h-full overflow-hidden">
        {isImage ? (
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_URL + image}`}
            alt="Section"
            className="w-full h-full object-cover section-content"
            style={{ objectFit: "cover" }} // Se asegura que la imagen cubra todo el contenedor
          />
        ) : (
          <VideoComponent url={image} className="w-full h-full object-cover section-content" />
        )}
      </div>
      <div
        className={`overflow-hidden w-full h-auto md:w-1/2 flex flex-col justify-center items-center 
            text-center md:px-8 px-2 md:py-0 py-8 ${textWhite ? "text-white" : "text-black"} section-content`}
        style={{
          backgroundColor: `#${bgColor}`,
          overflow: "hidden", // Aseguramos que no haya overflow no deseado en el texto
        }}
      >
        <h1 className="text-2xl md:text-5xl font-bold font-family-display">
          {eslogan}
        </h1>
        <p className="text-lg md:text-xl font-family-display pt-2">{autor}</p>
        <p className="text-base md:text-base pt-8 text-justify md:px-12 px-10">
          {descripcion}
        </p>
      </div>
    </div>
  );
};

export default SectionInformation;
