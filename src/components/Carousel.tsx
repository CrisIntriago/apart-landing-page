"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
    <div className="w-full px-24">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="rounded-2xl"
      >
        {slides.slice(0, 4).map((slide, index) => (
          <SwiperSlide key={index}>

            <div>

              <div className="bg-[#151515]">
                <h1 className="flex justify-center slide.title text-6xl rounded-t-">
                  {slide.title}
                </h1>
              </div>



              <div
                className="flex flex-col items-center justify-center p-10 text-black rounded-t-none min-h-96"
                style={{ backgroundColor: slide.color }}
              >
                <h2 className="text-2xl font-bold">Al terminar este modulo será capaz de:</h2>
                <div className="text"> <span className="text-bold">Duración:</span>  4 meses</div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
