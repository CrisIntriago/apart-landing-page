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
    image: "casey.webp",
  },
  {
    id: 2,
    question: "She enjoys ___ books in her free time.",
    options: ["should", "can", "might"],
    image: "jordan.webp",
  },
  {
    id: 3,
    question: "If I had known you were coming, I __ a cake.",
    options: ["should", "can", "might"],
    image: "cristiano_ronaldo.jpg",
  },
  {
    id: 4,
    question: "If I __ you, I would take that job.",
    options: ["should", "can", "might"],
    image: "steve_concreto.jpg",
  },
];
