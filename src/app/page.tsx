import Navbar from "../components/navbar"; // Asegúrate de tener el Navbar importado
import Hero from "@/sections/hero";
import ForbesSection from "@/sections/forbes_section";
import SectionInformation from "@/components/sections_information";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ForbesSection/>
      <SectionInformation image="https://apartcdn.s3.sa-east-1.amazonaws.com/henry_banner.mp4"eslogan={`"Si todos avanzan juntos, el éxito llega solo."`} autor="Henry Ford - Fundador de Ford Motor Company" descripcion="Aprende inglés en 
      grupos reducidos de máximo 6 estudiantes, con la atención personalizada de profesores altamente experimentados, 
      para maximizar tu aprendizaje y progreso." enlace="Cursos" bgColor="FAF5DA" inverted= {false}  />
      <SectionInformation image="https://apartcdn.s3.sa-east-1.amazonaws.com/banner-apart.mp4" eslogan='"Cada avance tecnológico es una oportunidad para superar límites y reimaginar el futuro."' autor="Henry Ford - Fundador de Ford Motor Company" descripcion="Aprende inglés en 
      grupos reducidos de máximo 6 estudiantes, con la atención personalizada de profesores altamente experimentados, 
      para maximizar tu aprendizaje y progreso." enlace="Cursos" bgColor="FAF5DA" inverted= {true}  />
      <SectionInformation image="https://apartcdn.s3.sa-east-1.amazonaws.com/elon_banner.mp4" eslogan='"Si todos avanzan juntos, el éxito llega solo."' autor="Henry Ford - Fundador de Ford Motor Company" descripcion="Aprende inglés en 
      grupos reducidos de máximo 6 estudiantes, con la atención personalizada de profesores altamente experimentados, 
      para maximizar tu aprendizaje y progreso." enlace="Cursos" bgColor="FAF5DA" inverted= {false}  />
      <Footer/>
    </>
  );
}
