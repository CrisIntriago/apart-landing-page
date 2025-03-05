import Hero from "@/sections/hero";

export default function Test() {
  return (
    <>
      <Hero
        url="secret_is_to_start.webm"
        title="El secreto para salir adelante es comenzar."
        description="Descubre tu nivel de inglés con este test, creado por expertos para ofrecerte un diagnóstico preciso de tus habilidades y necesidades lingüísticas."
        buttonText="SÉ DIFERENTE"
        buttonLink="/test/diagnostic"
      />
    </>
  );
}
