import Hero from "@/sections/hero";
import { ClassCard } from "@/components/ClassCard";

interface TarjetaProps {
  title: string;
  description: string[];
  price: string;
  bgColor: string;
  textColor: string;
  buttonType: "primary" | "secondary" | "ternary";
}

const grupales: TarjetaProps[] = [
  {
    title: "Básico",
    description: [
      "8 clases mensuales",
      "Grupos de 4 a 6 estudiantes",
      "Acceso completo a la plataforma",
      "Horario flexible",
    ],
    price: "$50",
    bgColor: "bg-[#151515]",
    textColor: "text-white",
    buttonType: "secondary",
  },
  {
    title: "Intermedio",
    description: [
      "10 clases mensuales",
      "Grupos de 4 a 6 estudiantes",
      "Acceso completo a la plataforma",
      "Horario flexible",
    ],
    price: "$60",
    bgColor: "bg-[#151515]",
    textColor: "text-white",
    buttonType: "secondary",
  },
  {
    title: "Intensivo",
    description: [
      "12 clases mensuales",
      "Grupos de 4 a 6 estudiantes",
      "Acceso completo a la plataforma",
      "Horario flexible",
    ],
    price: "$70",
    bgColor: "bg-[#151515]",
    textColor: "text-white",
    buttonType: "secondary",
  },
];

const individuales: TarjetaProps[] = [
  {
    title: "Básico",
    description: [
      "8 clases mensuales",
      "Grupos de 4 a 6 estudiantes",
      "Acceso completo a la plataforma",
      "Horario flexible",
    ],
    price: "$100",
    bgColor: "bg-[#D1D1D1]",
    textColor: "text-black",
    buttonType: "ternary",
  },
  {
    title: "Intermedio",
    description: [
      "10 clases mensuales",
      "Grupos de 4 a 6 estudiantes",
      "Acceso completo a la plataforma",
      "Horario flexible",
    ],
    price: "$110",
    bgColor: "bg-[#D1D1D1]",
    textColor: "text-black",
    buttonType: "ternary",
  },
  {
    title: "Intensivo",
    description: [
      "10 clases mensuales",
      "Grupos de 4 a 6 estudiantes",
      "Acceso completo a la plataforma",
      "Horario flexible",
    ],
    price: "$120",
    bgColor: "bg-[#D1D1D1]",
    textColor: "text-black",
    buttonType: "ternary",
  },
];

const Payment: React.FC = () => {
  return (
    <>
      <Hero
        url="classes_payment.webm"
        title="La realidad es flexible"
        description="Prepárate para comenzar este viaje con nosotros. Explora nuestras diferentes opciones y elige la que mejor se adapte a tus necesidades."
        buttonLink="/"
      />
      <div className="flex flex-col items-center justify-center w-full h-auto bg-[#FAF5DA] py-16">
        <h3 className="text-black text-4xl font-semibold my-10">
          Clases Grupales
        </h3>
        <div className="flex flex-wrap justify-center gap-14 mb-8">
          {grupales.map((item, index) => (
            <ClassCard key={index} {...item} />
          ))}
        </div>

        <div className="w-full h-[1px] bg-slate-600 mb-8"></div>

        <h3 className="text-black text-4xl font-semibold my-10">
          Clases Individuales
        </h3>
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
