"use client";
import React from "react";
import ApartButton from "./ApartButton";
import VideoComponent from "./VideoComponent";
import { useRouter } from "next/navigation";
import { paymentTypes } from "@/constants/constants";

interface ChooseOptionProps {
  level: string;
}


const ChooseOptionComponent: React.FC<ChooseOptionProps> = (
  {
    level
  }
) => {
  const router = useRouter();
  return (
    <div className="div flex flex-col lg:w-auto  lg:flex-row lg:px-10  lg:gap-x-20  lg:mx-0 lg:h-[350px]">
      <div className="lg:w-1/2 flex flex-col justify-center">
        <VideoComponent
          rounded={true}
          url="last_test.mp4"
          className="hidden lg:block object-cover w-[270px] h-[200px] lg:w-[396px] lg:h-[350px] flex justify-center items-center"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center items-center md:mx-0 mx-9">
        <div className="w-full flex flex-col items-center justify-center gap-y-1 lg:gap-y-4">
          <p className="text-3xl md:text-4xl text-center md:text-left font-bold lg:pb-0 pb-4">
            La realidad es flexible
          </p>

          <div className="flex flex-col"></div>
          <p className="text-xl  md:text-left ">Nivel estimado de inglés:</p>
          <p className="text-xl  md:text-left font-bold">{level}</p>
          <p className="text-xlmd:text-left">Verifica tu nivel con nosotros:</p>
          <div className="w-full flex flex-col gap-y-3 px-6  pb-4 lg:pb-0">
            <ApartButton
              tipo="secondary"
              onClick={() => router.push(`/pago?oferta=${paymentTypes.INDIVIDUAL_PRUEBA.url}`)}   text="Reserva clase de prueba"
            />
             <ApartButton
              tipo="secondary"
              onClick={() => router.push("/cursos")}
              bgColor=""
              text="Revisa cursos"
            />
          </div>

          <VideoComponent
            rounded={true}
            url="last_test.mp4"
            placeholderUrl="last_test_poster.webp"
            className="lg:hidden object-cover w-[270px] h-[200px] lg:w-[396px] lg:h-[350px] flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseOptionComponent;
