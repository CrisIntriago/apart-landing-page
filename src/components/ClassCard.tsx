"use client"
import ApartButton from "./ApartButton";

interface ClassCardProps {
  title: string;
  description: string[];
  price: string;
  bgColor: string;
  textColor: string;
  buttonType: "primary" | "secondary" | "ternary";
}

export const ClassCard: React.FC<ClassCardProps> = ({
  title,
  description,
  price,
  bgColor,
  textColor,
  buttonType,
}) => {
  return (
    <div
      className={`h-64 md:h-128 ${bgColor} ${textColor} p-8 mb-10 flex flex-col justify-between rounded-2xl shadow-lg`}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="text-sm list-disc pl-4 ">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <p className="text-2xl font-bold pt-0 md:pt-4">{price}</p>
      <div className="w-1/2  pt-0 md:pt-4">

        <ApartButton
          text="Comprar"
          onClick={() => { }}
          tipo={buttonType}
        />
      </div>
    </div>
  );
};
