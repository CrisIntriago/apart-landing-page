export default function ForbesSection() {
    return (
        <section className="flex flex-col items-center justify-center w-full bg-white text-black h-[500px] py-16 relative">
            {/* Imagen encima del texto */}
            <img 
                src="/images/forbes_logo.png" 
                alt="forbes_logo" 
                className="h-8 w-auto" 
            />
            
            {/* Texto */}
            <p className="text-5xl text-center relative z-10 py-8 px-20">
                “Dominar el inglés y el español incrementa hasta casi
                cuatro veces tus ingresos.”
            </p>
        </section>
    )
}
