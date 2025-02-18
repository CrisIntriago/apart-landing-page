import Hero from "@/sections/hero";
import HeroBottom from "@/sections/heroBottom"
import ForbesSection from "@/sections/forbes_section";
import Footer from "@/sections/footer";
import SectionInformation from "@/components/SectionsInformation";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Hero key="hero1" url="banner-apart.mp4" title="LA REALIDAD ES FLEXIBLE" buttonText="EMPIEZA AHORA" buttonLink="/oferta" isAbsolute= {true} />
      <ForbesSection />
      <SectionInformation image="https://apartcdn.s3.sa-east-1.amazonaws.com/henry_banner.mp4" eslogan={`“Si todos avanzan juntos, el éxito llega solo.”`} autor="Henry Ford - Fundador de Ford Motor Company" descripcion="
      Aprende inglés en grupos reducidos de máximo 6 estudiantes, con la atención personalizada de profesores altamente experimentados, para maximizar tu aprendizaje y progreso.”" bgColor="FAF5DA" inverted={false} />
      <SectionInformation image="https://apartcdn.s3.sa-east-1.amazonaws.com/jeff_banner.mp4" eslogan='“Cada avance tecnológico es una oportunidad para superar límites y reimaginar el futuro.”' autor="Jeff Bezos ~ Fundador de Amazon" descripcion="Aprende inglés en 
      grupos reducidos de máximo 6 estudiantes, con la atención personalizada de profesores altamente experimentados, 
      para maximizar tu aprendizaje y progreso." bgColor="5B473C" inverted={true} textWhite={true} />
      <SectionInformation image="https://apartcdn.s3.sa-east-1.amazonaws.com/elon_banner.mp4" eslogan='“Si todos avanzan juntos, el éxito llega solo.”' autor="Elon Musk ~ Fundador de Tesla y SpaceX" descripcion="Aprende inglés en 
      grupos reducidos de máximo 6 estudiantes, con la atención personalizada de profesores altamente experimentados, 
      para maximizar tu aprendizaje y progreso."  bgColor="D1D1D1" inverted={false} />
      <Hero key="hero2 "url="jeff_banner.mp4" title="¿NO SABES POR DONDE EMPEZAR?" buttonText="HAZ EL TEST" buttonLink="/test" />
      <Footer />
    </>
  );
}
