import ForbesSection from "@/sections/forbes_section";
import Footer from "@/sections/footer";
import SectionInformation from "@/components/SectionsInformation";
import Navbar from "@/components/navbar";
import { OverlayComponent } from "@/components/animations/overlayComponent";
import HeroPrincipal from "@/sections/heroPrincipal";
import Hero from "@/sections/hero";

export default function Home() {
  return (
    <>
      <OverlayComponent />
      <Navbar />
      <HeroPrincipal
        key="hero1"
        url="hero.mp4"
        title="LA REALIDAD ES FLEXIBLE."
        buttonText="EMPIEZA AHORA"
        buttonLink="/test"
        isAbsolute={true}
      />
      <ForbesSection />
      <SectionInformation
        key="section1"
        image="every_body_advances.webp"
        eslogan={`“Si todos avanzan juntos, el éxito llega solo.”`}
        autor="Henry Ford - Fundador de Ford Motor Company"
        descripcion="
      Aprende inglés en grupos reducidos de máximo 6 estudiantes, con la atención personalizada de profesores altamente experimentados, para maximizar tu aprendizaje y progreso.”"
        bgColor="FAF5DA"
        inverted={false}
      />
      <SectionInformation
        key="section2"
        image="tech_advance.mp4"
        eslogan="“Cada avance tecnológico es una oportunidad para superar límites y reimaginar el futuro.”"
        autor="Jeff Bezos ~ Fundador de Amazon"
        descripcion="El aprendizaje de inglés en línea se lleva a cabo en nuestra plataforma digital, que te ofrece acceso a una amplia variedad de lecciones interactivas, actividades dinámicas y ejercicios diseñados para reforzar tus conocimientos de manera práctica, llevamos el conocimiento al alcance de tus manos, sin barreras ni límites."
        bgColor="5B473C"
        inverted={true}
        textWhite={true}
      />
      <SectionInformation
        key="section3"
        image="mac_image.webp"
        eslogan="“Si todos avanzan juntos, el éxito llega solo.”"
        autor="Elon Musk ~ Fundador de Tesla y SpaceX"
        descripcion="Aprende desde cualquier lugar con clases online inmersivas adaptadas a tus necesidades. Combinamos el aprendizaje de gramática con películas y contenido de los creadores más populares de habla inglesa, brindándote una experiencia innovadora y efectiva."
        bgColor="D1D1D1"
        inverted={false}
      />
      <Hero
        key="hero2 "
        url="where_to_begin.mp4"
        title="¿NO SABES POR DONDE EMPEZAR?"
        buttonText="HAZ EL TEST"
        buttonLink="/test"
      />
      <Footer />
    </>
  );
}
