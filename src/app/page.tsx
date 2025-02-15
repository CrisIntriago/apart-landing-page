import Navbar from "../components/navbar";
import Hero from "@/sections/hero";
import HeroBottom from "@/sections/heroBottom"
import ForbesSection from "@/sections/forbes_section";
import SectionInformation from "@/components/sections_information";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ForbesSection/>
      <SectionInformation image="https://apartcdn.s3.sa-east-1.amazonaws.com/henry_banner.mp4"eslogan={`“Si todos avanzan juntos, el éxito llega solo.”`} autor="Henry Ford - Fundador de Ford Motor Company" descripcion="
      Aprende inglés en grupos reducidos de máximo 6 estudiantes, con la atención personalizada de profesores altamente experimentados, para maximizar tu aprendizaje y progreso.”" bgColor="FAF5DA" inverted= {false}  />
      <SectionInformation image="https://apartcdn.s3.sa-east-1.amazonaws.com/jeff_banner.mp4" eslogan='“Cada avance tecnológico es una oportunidad para superar límites y reimaginar el futuro.”' autor="Jeff Bezos ~ Fundador de Amazon" descripcion="Aprende inglés en 
      grupos reducidos de máximo 6 estudiantes, con la atención personalizada de profesores altamente experimentados, 
      para maximizar tu aprendizaje y progreso." bgColor="5B473C" inverted= {true}  textWhite= {true}/>
      <SectionInformation image="https://apartcdn.s3.sa-east-1.amazonaws.com/elon_banner.mp4" eslogan='“Si todos avanzan juntos, el éxito llega solo.”' autor="Elon Musk ~ Fundador de Tesla y SpaceX" descripcion="Aprende inglés en 
      grupos reducidos de máximo 6 estudiantes, con la atención personalizada de profesores altamente experimentados, 
      para maximizar tu aprendizaje y progreso."  bgColor="D1D1D1" inverted= {false}  />
      <HeroBottom/>
      <Footer/>
    </>
  );
}
