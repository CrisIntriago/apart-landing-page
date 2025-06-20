import Carousel from "@/components/Carousel";
import Hero from "@/sections/hero";

export default function Oferta() {
  return (
    <>
      <Hero
        url="today_you_change.mp4"
        title="¿HOY CAMBIAS TU VIDA?"
        description="1.5 mil millones de personas alrededor del mundo hablan inglés, no creo que haga falta explicar más. "
        buttonText="EMPIEZA AHORA"
        buttonLink="/test"
      />
      <div
        id="ofertas"
        className="flex flex-col items-center justify-center w-full h-[800px] bg-[#FAF5DA]"
      >
        <h2 className="text-black text-4xl md:text-5xl font-bold mb-20 text-center">
          AQUÍ EMPIEZA TU VIAJE
        </h2>
        <Carousel
          slides={[
            {
              title: "A1",
              description: "Descripción 1",
              color: "#FFFFFF",
              item1: "Dialogar sobre temas cotidianos",
              item2: "Interpretar expresiones comunes",
              item3: "Formular preguntas esenciales",
            },
            {
              title: "A2",
              description: "Descripción 2",
              color: "#D1D1D1",
              item1: "Hablar con más fluidez sobre mi vida",
              item2: "Comprender situaciones del día a día",
              item3: "Participar en conversaciones simples",
            },
            {
              title: "B1",
              description: "Descripción 4",
              color: "#FFFFFF",
              item1: "Entender casi todo lo que escucho",
              item2: "Participar en conversaciones serias",
              item3: "Expresar opiniones con claridad",
            },
            {
              title: "B2",
              description: "Descripción 3",
              color: "#D1D1D1",
              item1: "Entender casi todo lo que escucho",
              item2: "Participar en conversaciones serias",
              item3: "Expresar opiniones con claridad",
            },
          ]}
        />
      </div>
    </>
  );
}
