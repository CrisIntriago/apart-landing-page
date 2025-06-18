import Hero from "@/sections/hero";
import { ClassCard } from "@/components/ClassCard";
import { paymentTypes } from "@/constants/constants"; 

interface TarjetaProps {
  title: string;
  description: string[];
  price: string;
  bgColor: string;
  textColor: string;
  buttonType: "primary" | "secondary" | "ternary";
  sendToUrl: string;
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
    bgColor: "bg-[#151515]",
    price: `$${paymentTypes.GRUPAL_BASICO.price}`,    
    textColor: "text-white",
    buttonType: "secondary",
    sendToUrl: paymentTypes.GRUPAL_BASICO.url
  },
  {
    title: "Intermedio",
    description: [
      "10 clases mensuales",
      "Grupos de 4 a 6 estudiantes",
      "Acceso completo a la plataforma",
      "Horario flexible",
    ],
    price: `$${paymentTypes.GRUPAL_INTERMEDIO.price}`,    
    bgColor: "bg-[#151515]",
    textColor: "text-white",
    buttonType: "secondary",
    sendToUrl: paymentTypes.GRUPAL_INTERMEDIO.url

  },
  {
    title: "Intensivo",
    description: [
      "12 clases mensuales",
      "Grupos de 4 a 6 estudiantes",
      "Acceso completo a la plataforma",
      "Horario flexible",
    ],
    price: `$${paymentTypes.GRUPAL_INTENSIVO.price}`,    
    bgColor: "bg-[#151515]",
    textColor: "text-white",
    buttonType: "secondary",
    sendToUrl: paymentTypes.GRUPAL_INTENSIVO.url

  },
];

const individuales: TarjetaProps[] = [
  {
    title: "Básico",
    description: [
      "8 clases mensuales",
      "Horario flexible",
    ],
    price: `$${paymentTypes.INDIVIDUAL_BASICO.price}`,    
    bgColor: "bg-[#D1D1D1]",
    textColor: "text-black",
    buttonType: "ternary",
    sendToUrl: paymentTypes.INDIVIDUAL_BASICO.url
  },
  {
    title: "Intermedio",
    description: [
      "10 clases mensuales",
      "Horario flexible",
    ],
    price: `$${paymentTypes.INDIVIDUAL_INTERMEDIO.price}`,    
    bgColor: "bg-[#D1D1D1]",
    textColor: "text-black",
    buttonType: "ternary",
    sendToUrl: paymentTypes.INDIVIDUAL_INTERMEDIO.url
  },
  {
    title: "Intensivo",
    description: [
      "12 clases mensuales",
      "Horario flexible",
    ],
    price: `$${paymentTypes.INDIVIDUAL_INTENSIVO.price}`,    
    bgColor: "bg-[#D1D1D1]",
    textColor: "text-black",
    buttonType: "ternary",
    sendToUrl: paymentTypes.INDIVIDUAL_INTENSIVO.url
  },
];

const Payment: React.FC = () => {
  return (
    <>
      <Hero
        url="classes_payment.mp4"
        title="La realidad es flexible"
        description="Prepárate para comenzar este viaje con nosotros. Explora nuestras diferentes opciones y elige la que mejor se adapte a tus necesidades."
        buttonLink="/"
        placeholderUrl="classes_payment_poster.webp"
      />
      <div id= "cursos"className="flex flex-col items-center justify-center w-full h-auto bg-[#FAF5DA] py-16">

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
