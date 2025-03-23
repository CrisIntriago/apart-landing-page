"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Asegúrate de registrar el plugin ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

export default function ForbesSection() {
  useEffect(() => {
    // Animación para la imagen
    gsap.fromTo(
      ".forbes-img", // Seleccionamos la imagen
      {
        opacity: 0, // Comienza invisible
        y: -50, // Empieza desde abajo
      },
      {
        opacity: 1, // Termina visible
        y: 0, // Llega a su posición original
        scrollTrigger: {
          trigger: ".forbes-img", // El trigger es la propia imagen
          start: "top 70%", // Empieza cuando la parte superior de la imagen llega al 80% de la ventana
          end: "top 40%", // Termina cuando la parte superior de la imagen llega al 30% de la ventana
          scrub: true, // Hace que la animación esté sincronizada con el scroll
        },
      }
    );

    // Animación para el párrafo
    gsap.fromTo(
      ".forbes-text", // Seleccionamos el párrafo
      {
        opacity: 0, // Comienza invisible
        y: -50, // Empieza desde abajo
      },
      {
        opacity: 1, // Termina visible
        y: 0, // Llega a su posición original
        scrollTrigger: {
          trigger: ".forbes-text", // El trigger es el propio párrafo
          start: "top 70%", // Empieza cuando la parte superior del párrafo llega al 80% de la ventana
          end: "top 40%", // Termina cuando la parte superior del párrafo llega al 30% de la ventana
          scrub: true, // Hace que la animación esté sincronizada con el scroll
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full bg-white text-black md:h-[500px] h-[250px] py-16 relative">
      <img
        src="/images/forbes_logo.png"
        alt="forbes_logo"
        className="forbes-img h-4 md:h-8 w-auto"
      />
      <p className="forbes-text md:text-5xl text-2xl text-center relative z-10 sm:py-8 pt-4 sm:px-20 px-3">
        “Dominar el inglés y el español incrementa hasta casi cuatro veces tus
        ingresos.”
      </p>
    </section>
  );
}
