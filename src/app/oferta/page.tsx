import Carousel from "@/components/Carousel"
import Footer from "@/sections/footer"
import Hero from "@/sections/hero"

export default function Oferta() {
    return (
        <>
            <Hero url="landing-page/planes.mp4" title="¿HOY CAMBIAS TU VIDA?" description="1.5 mil millones de personas alrededor del mundo hablan inglés, no creo que haga falta explicar más. " buttonText="EMPIEZA AHORA" buttonLink="/test" />
            <div className="flex flex-col items-center justify-center w-full h-[800px] bg-[#FAF5DA]">
                <h2 className="text-black text-4xl md:text-5xl font-bold mb-20 text-center">AQUI EMPIEZA TU VIAJE</h2>
                <Carousel slides={[
                    { title: "A1", description: "Descripción 1", color: "#FFFFFF" },
                    { title: "A2", description: "Descripción 2", color: "#D1D1D1" },
                    { title: "B1", description: "Descripción 4", color: "#FFFFFF" },
                    { title: "B2", description: "Descripción 3", color: "#D1D1D1" },
                ]} />
            </div>
            <Footer />
        </>
    )
}