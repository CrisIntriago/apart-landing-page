"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ApartButton from "./ApartButton";
interface SlideContent {
  title: string;
  description: string;
  color: string;
}

interface CarouselProps {
  slides: SlideContent[];
}

export default function Carousel({ slides }: CarouselProps) {
  return (
    <div className="w-full px-6 md:px-12 lg:px-24">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full shadow-lg rounded-2xl overflow-hidden">
              <div className="flex items-center justify-center bg-[#151515] p-6 text-center">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
                  {slide.title}
                </h1>
              </div>

              <div
                className="flex flex-col items-start md:justify-center p-4 md:p-4 lg:p-5 min-h-72 md:min-h-80 lg:min-h-96 rounded-b-2xl text-black text-left"
                style={{ backgroundColor: slide.color }}
              >
                <h2 className="text-lg md:text-lg font-bold">
                  Al terminar este módulo será capaz de:
                </h2>

                <ul className="list-disc list-inside mt-3 text-base md:text-md text-left">
                  <li>Dialogar sobre temas cotidianos.</li>
                  <li>Interpretar expresiones comunes.</li>
                  <li>Formular preguntas esenciales.</li>
                </ul>

                <div className="mt-6 text-base md:text-md pb-4">
                  <span className="font-bold">Duración:</span> 4 meses
                </div>

                <div className="w-full flex justify-start">
                  <div className="w-3/4">

                    <ApartButton
                      text="Comprar"
                      tipo="ternary"
                      onClick={() => { }}
                    />
                  </div >
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
