export type Question = {
  id: number;
  question: string;
  options: string[];
  image: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "You ___ be careful with your money.",
    options: ["should", "can", "might"],
    image: "assessment-images/cristiano_ronaldo.jpg",
  },
  {
    id: 2,
    question: "¿Qué es el color del cielo en un día despejado?",
    options: ["should", "can", "might"],
    image: "assessment-images/steve_concreto.jpg",
  },
];
