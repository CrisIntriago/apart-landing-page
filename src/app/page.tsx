"use client";
import { useState } from "react";
import Navbar from "../components/navbar"; // Asegúrate de tener el Navbar importado
import Hero from "@/sections/hero";

export default function Home() {
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Función que se ejecuta cuando el video puede comenzar a reproducirse
  const handleCanPlay = () => {
    setIsVideoReady(true); // Video listo para reproducirse
  };

  return (
    <div>
      <Hero />
      <Navbar className="absolute top-0 left-0 w-full z-10" />
    </div >
  );
}
