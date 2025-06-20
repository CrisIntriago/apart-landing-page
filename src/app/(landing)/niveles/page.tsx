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
              description: "Nivel principiante. Comienza a comunicarte en inglés desde cero.",
              color: "#FFFFFF",
              item1: "Saludar y presentarte a ti mismo y a otros.",
              item2: "Hacer y responder preguntas básicas sobre información personal.",
              item3: "Comprender y usar expresiones cotidianas simples.",
            },
            {
              title: "A2",
              description: "Nivel básico. Desenvuélvete en situaciones cotidianas.",
              color: "#D1D1D1",
              item1: "Hablar sobre tu familia, trabajo y rutinas diarias.",
              item2: "Comprender frases y expresiones de uso frecuente.",
              item3: "Participar en conversaciones sencillas y directas.",
            },
            {
              title: "B1",
              description: "Nivel intermedio. Comunícate con mayor confianza.",
              color: "#FFFFFF",
              item1: "Entender los puntos principales de textos claros y estándar.",
              item2: "Desenvolverte en la mayoría de situaciones que pueden surgir al viajar.",
              item3: "Producir textos sencillos sobre temas familiares o de interés personal.",
            },
            {
              title: "B2",
              description: "Nivel intermedio alto. Expresa ideas complejas con claridad.",
              color: "#D1D1D1",
              item1: "Comprender ideas principales de textos complejos, tanto concretos como abstractos.",
              item2: "Interactuar con hablantes nativos con fluidez y naturalidad.",
              item3: "Expresar opiniones y argumentos de forma clara y detallada.",
            },
          ]}
        />
      </div>
    </>
  );
}
