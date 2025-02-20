import Carousel from "@/components/Carousel"
import Hero from "@/sections/hero"
import { ClassCard } from "@/components/ClassCard";
/*"use client" 

declare global {
  interface Window {
    paypal: any;
  }
} */

interface TarjetaProps {
  title: string;
  description: string[];
  price: string;
  bgColor: string;
  textColor: string;
  buttonBg: string;
  buttonText: string;
  borderColor: string;
}

const grupales: TarjetaProps[] = [
  { title: "Básico", description: ["8 clases mensuales", "Grupos de 4 a 6 estudiantes", "Acceso completo a la plataforma", "Horario flexible"], price: "$50", bgColor: "bg-black", textColor: "text-white", buttonBg: "bg-[#D1D1D1]", buttonText: "text-black", borderColor: "border-white" },
  { title: "Intermedio", description: ["10 clases mensuales", "Grupos de 4 a 6 estudiantes", "Acceso completo a la plataforma", "Horario flexible"], price: "$60", bgColor: "bg-black", textColor: "text-white", buttonBg: "bg-[#D1D1D1]", buttonText: "text-black", borderColor: "border-white" },
  { title: "Intensivo", description: ["12 clases mensuales", "Grupos de 4 a 6 estudiantes", "Acceso completo a la plataforma", "Horario flexible"], price: "$70", bgColor: "bg-black", textColor: "text-white", buttonBg: "bg-[#D1D1D1]", buttonText: "text-black", borderColor: "border-white" },
];

const individuales: TarjetaProps[] = [
  { title: "Básico", description: ["8 clases mensuales", "Grupos de 4 a 6 estudiantes", "Acceso completo a la plataforma", "Horario flexible"], price: "$100", bgColor: "bg-[#D1D1D1]", textColor: "text-black", buttonBg: "bg-black", buttonText: "text-white", borderColor: "border-white" },
  { title: "Intermedio", description: ["10 clases mensuales", "Grupos de 4 a 6 estudiantes", "Acceso completo a la plataforma", "Horario flexible"], price: "$110", bgColor: "bg-[#D1D1D1]", textColor: "text-black", buttonBg: "bg-black", buttonText: "text-white", borderColor: "border-white" },
  { title: "Intermedio", description: ["10 clases mensuales", "Grupos de 4 a 6 estudiantes", "Acceso completo a la plataforma", "Horario flexible"], price: "$120", bgColor: "bg-[#D1D1D1]", textColor: "text-black", buttonBg: "bg-black", buttonText: "text-white", borderColor: "border-white" },
];

const Payment: React.FC = () => {

  return (
    <>
      <Hero url="landing-page/planes.mp4" title="La realidad es flexible" description="Prepárate para comenzar este viaje con nosotros. Explora nuestras diferentes opciones y elige la que mejor se adapte a tus necesidades." buttonLink="/" />
      <div className="flex flex-col items-center justify-center w-full h-auto bg-[#FAF5DA] py-16">
        <h3 className="text-black text-4xl font-semibold my-10">Clases Grupales</h3>
        <div className="flex flex-wrap justify-center gap-14 mb-8">
          {grupales.map((item, index) => (
            <ClassCard key={index} {...item} />
          ))}
        </div>

        <div className="w-3/4 h-[2px] bg-black mb-8"></div>

        <h3 className="text-black text-4xl font-semibold my-10">Clases Individuales</h3>
        <div className="flex flex-wrap justify-center gap-14 mb-8">
          {individuales.map((item, index) => (
            <ClassCard key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Payment;