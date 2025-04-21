import Hero from "@/sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Descubre tu nivel de inglés con este test gratis",
  description: "Aprender inglés puede cambiar tu vida",
  openGraph: {
    images: `${process.env.NEXT_PUBLIC_CDN_URL}mac_image.webp`,
  },
};

export default function Test() {
  return (
    <>
      <Hero
        url="the_secret_is_to_start.mp4"
        title="El secreto para salir adelante es comenzar."
        description="Descubre tu nivel de inglés con este test, creado por expertos para ofrecerte un diagnóstico preciso de tus habilidades y necesidades lingüísticas."
        buttonText="HAZ EL TEST"
        buttonLink="/test/diagnostico"
      />
    </>
  );
}
