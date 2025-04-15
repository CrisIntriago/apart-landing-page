"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";  // Importa GSAP

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Aplica la animación a la navbar al montarse el componente
    gsap.fromTo(
      ".navbar",  // Selecciona el navbar para animarlo
      {
        opacity: 0,  // Empieza con opacidad 0
        y: -20,      // Empieza desde un desplazamiento hacia arriba
      },
      {
        delay:2.5,
        opacity: 1,  // Termina con opacidad 1
        y: 0,        // Termina en su posición original
        duration: 1, // Duración de la animación en segundos
        ease: "power3.out", // Tipo de animación suave
      }
    );
  }, []);  // Se ejecuta solo una vez cuando el componente se monta

  return (
    <nav className="bg-black bg-opacity-40 navbar fixed top-0 left-0 w-full z-10 flex items-center justify-between lg:px-32 py-3 lg:text-lg text-lg border-b-2 border-white px-4 text-white">
      <Link href={"/"}>
        <div className="flex items-center space-x-10 font-guru">
          <h1 className="sm:text-5xl text-3xl font-bold">APART</h1>
        </div>
      </Link>

      {/* Menú de navegación en escritorio */}
      <div className="hidden md:flex items-center sm:space-x-28">
        <Link href={"/cursos"}>
          <div className="hover:text-gray-400 flex items-center space-x-4">
            <p>Cursos</p>
          </div>
        </Link>
        <Link href={"/niveles"}>
          <div className="hover:text-gray-400 flex items-center space-x-4">
            <p>Niveles</p>
          </div>
        </Link>
      </div>
      {/* Botón de hamburguesa */}
      <div className="md:hidden flex items-center">
        <button className="text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          &#9776;
        </button>
      </div>
      {/* Menú móvil */}
      {isMenuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 w-full h-screen bg-black bg-opacity-70 backdrop-blur-lg flex flex-col px-0 pt-4 transition-opacity duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="bg-transparent text-white flex flex-col space-y-6 w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Encabezado con título y botón de cierre */}
              <div className="flex items-center justify-between w-full">
                <Link href={"/"}>
                  <h1 className="sm:text-5xl text-6xl font-bold pl-4">APART</h1>
                </Link>
                <button
                  className="text-3xl pr-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ✕
                </button>
              </div>

              {/* Opciones del menú hamburguesa*/}
              <div className="flex flex-col space-y-4 text-gray-300 pl-8 text-xl pt-4 " >
                <a href="#" className="hover:text-gray-300">
                  Misión
                </a>
                <a href="#" className="hover:text-gray-300">
                  Historia
                </a>
                <a href="#" className="hover:text-gray-300">
                  Contacto
                </a>
              </div>
            </div>
          </div>,
          document.getElementById("menu-portal")!
        )}
    </nav>
  );
}
