export default function ForbesSection() {
    return (
        <section className="flex flex-col items-center justify-center w-full bg-white text-black h-80 py-16 relative">
            {/* Imagen encima del texto */}
            <img 
                src="/images/forbes_logo.png" 
                alt="forbes_logo" 
                className="w-32 h-auto" 
            />
            
            {/* Texto */}
            <p className="text-5xl relative z-10">
                “Dominar el inglés y el español incrementa hasta casi
                cuatro veces tus ingresos.”
            </p>
        </section>
    )
}
