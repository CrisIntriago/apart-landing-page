"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarrouselPayment: React.FC = () => {
  const images = [
    "https://d362kojubhlm1d.cloudfront.net/carrousel_payment/1.webp",
    "https://d362kojubhlm1d.cloudfront.net/carrousel_payment/3.webp",
    "https://d362kojubhlm1d.cloudfront.net/carrousel_payment/2.webp",
    "https://d362kojubhlm1d.cloudfront.net/carrousel_payment/4.webp",
  ];

  return (
    <div className="md:w-2/3 2xl:w-3/4 hidden sm:hidden md:block h-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000, // 3 segundos de retardo entre cada imagen
        }}
        navigation={false} // Sin las flechas laterales
        className="h-full" // Asegura que el Swiper ocupe toda la altura
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="h-full">
            <img
              src={src}
              alt={`carousel-item-${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default CarrouselPayment;
