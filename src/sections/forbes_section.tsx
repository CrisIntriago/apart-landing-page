export default function ForbesSection() {
  return (
    <section
      className="flex flex-col items-center justify-center w-full bg-white text-black
         md:h-[500px] h-250px py-16 relative"
    >
      <img
        src="/images/forbes_logo.png"
        alt="forbes_logo"
        className="h-4 md:h-8 w-auto"
      />
      <p className="md:text-5xl text-2xl text-center relative z-10 sm:py-8 pt-4 sm:px-20 px-3">
        “Dominar el inglés y el español incrementa hasta casi cuatro veces tus
        ingresos.”
      </p>
    </section>
  );
}
