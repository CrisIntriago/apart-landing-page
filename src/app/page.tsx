import Navbar from "../components/navbar"; // Asegúrate de tener el Navbar importado
import Hero from "@/sections/hero";
import ForbesSection from "@/sections/forbes_section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ForbesSection/>
    </>
  );
}
