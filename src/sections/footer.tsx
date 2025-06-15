import { socialMediaLinks } from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white text-center  pt-10 md:pt-20">
      <div className="flex justify-center max-w-6xl mx-auto px-4">
        <div className="w-1/3 flex flex-col items-center gap-1">
          <h3 className="font-bold text-xs sm:text-sm md:text-base">
            Servicio al cliente y QA
          </h3>
          <p className="text-[#FAF5DA] text-[8px] sm:text-xs md:text-sm">
            <a href={socialMediaLinks.whatsapp} className="hover:underline" target="_blank" rel="noopener noreferrer">
              Contáctanos
            </a>
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center gap-1">
          <h3 className="font-bold text-xs sm:text-sm md:text-base">
            Lo aburrido
          </h3>
          <p className="text-[#FAF5DA] text-[8px] sm:text-xs md:text-sm">
            Legal
          </p>
          <p className="text-[#FAF5DA] text-[8px] sm:text-xs md:text-sm">
            Privacidad
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center gap-1">
          <h3 className="font-bold text-xs sm:text-sm md:text-base">
            Lo genial
          </h3>
          <p className="text-[#FAF5DA] text-[8px] sm:text-xs md:text-sm">
            <a href={socialMediaLinks.instagram} className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
          <p className="text-[#FAF5DA] text-[8px] sm:text-xs md:text-sm">
            <a href={socialMediaLinks.whatsapp} className="hover:underline" target="_blank" rel="noopener noreferrer">Whatsapp</a>
          </p>

        </div>
      </div>

      <div className="overflow-hidden h-[66px] md:h-[210px]">
        <p
          className="font-bold text-[#FAF5DA] leading-none text-[110px] md:text-[350px] overflow-hidden m-0 p-0"
          style={{ clipPath: 'inset(0 0 40% 0)' }}
        >
          APART
        </p>
      </div>
    </footer>
  );
}
