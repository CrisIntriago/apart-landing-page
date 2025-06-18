"use client"
import React from "react";

interface ButtonProps {
  text: string;
  onClick: (...args: any[]) => any;
  bgColor?: string;
  tipo?: "primary" | "secondary" | "ternary"; 
}

const ApartButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  bgColor,
  tipo = "primary",
}) => {
  let buttonClass = "";
  switch (tipo) {
    case "primary":
      buttonClass =
        "w-full py-1 border border-white rounded-2xl bg-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-500 ease-in-out transition-all" 
      break;
    case "secondary":
      buttonClass =
        "text-bold w-full py-1 border border-white rounded-2xl bg-[#323232] hover:bg-black hover:text-white hover:border-white transition-colors duration-500 ease-in-out transition-all"
      break;
    case "ternary":
      buttonClass =
        "text-bold px-3 text-white py-1 rounded-2xl bg-[#323232] hover:bg-black hover:text-white hover:border-white transition-colors duration-500 ease-in-out transition-all"
      break;
    default:
      buttonClass =
        "w-full py-1 border border-white-500 rounded-2xl bg-transparent hover:bg-blue-500 hover:text-white transition-colors duration-500 ease-in-out transition-all";
      break;
  }

  return (
    <button
      className={buttonClass}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ApartButton;
