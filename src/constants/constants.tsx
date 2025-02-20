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
    image: "cristiano_ronaldo.jpg",
  },
  {
    id: 2,
    question: "¿Qué es el color del cielo en un día despejado?",
    options: ["should", "can", "might"],
    image: "steve_concreto.jpg",
  },
  {
    id: 2,
    question: "¿Qué es el color del cielo en un día nublado?",
    options: ["should", "can", "might"],
    image: "cristiano_ronaldo.jpg",
  },
  {
    id: 2,
    question: "¿Qué es el color del cielo en un día cerrado?",
    options: ["should", "can", "might"],
    image: "cristiano_ronaldo.jpg",
  },
  {
    id: 2,
    question: "¿Qué es el color del cielo en un día tested?",
    options: ["should", "can", "might"],
    image: "steve_concreto.jpg",
  },
  {
    id: 2,
    question: "¿Qué es el color del cielo en un día varios?",
    options: ["should", "can", "might"],
    image: "cristiano_ronaldo.jpg",
  },
];
