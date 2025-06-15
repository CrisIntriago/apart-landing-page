export type Question = {
  id: number;
  question: string;
  options: string[];
  image: string;
  weight: number;
  correctAnswer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the past tense of the verb 'go'?",
    options: ["goed", "went", "gone", "going"],
    image: "casey.webp",
    weight: 1,
    correctAnswer: "went",
  },
  {
    id: 2,
    question: "Choose the correct sentence:",
    options: ["He can sings well.", "He can sing well.", "He can to sing well.", "He can singing well."],
    image: "jordan.webp",
    weight: 1,
    correctAnswer: "He can sing well.",
  },
  {
    id: 3,
    question: "What does the word 'fortunate' mean?",
    options: ["Unlucky", "Lucky", "Sad", "Angry"],
    image: "Cristiano+opcion1.webp",
    weight: 1,
    correctAnswer: "Lucky",
  },
  {
    id: 4,
    question: "Select the correct preposition: 'I am interested ___ learning English.'",
    options: ["in", "on", "at", "about"],
    image: "steve_concreto.webp",
    weight: 1,
    correctAnswer: "in",
  }
  ////// NECESITO NUEVAS IMAGENES PARA ESTAS PREGUNTAS //////
  /// ME FALTAN 6 imagenes más
  ,
  {
    id: 5,
    question: "Which of these words is an adjective?",
    options: ["Quickly", "Run", "Beautiful", "Swim"],
    image: "jeff_bezos.webp",
    weight: 1,
    correctAnswer: "Beautiful",
  },
  {
    id: 6,
    question: "Choose the correct form of the verb for this sentence: 'She ___ to the store every Saturday.'",
    options: ["go", "goes", "is go", "going"],
    image: "elon.webp",
    weight: 2,
    correctAnswer: "goes",
  },
  {
    id: 7,
    question: "Choose the correct word to complete the sentence: 'I’ve never ___ to Japan.'",
    options: ["been", "go", "going", "went"],
    image: "Disney_1.webp",
    weight: 2,
    correctAnswer: "been",
  },
  {
    id: 8,
    question: "Which of the following sentences is in the future tense?",
    options: ["I am studying English right now.", "I studied English yesterday.", "I will study English tomorrow.", "I study English every day."],
    image: "steve-markulla.webp",
    weight: 2,
    correctAnswer: "I will study English tomorrow.",
  },
  {
    id: 9,
    question: "Complete the sentence with the correct word: '___ you like tea?'",
    options: ["Do", "Are", "Did", "Have"],
    image: "Cristiano+opcion+2.webp",
    weight: 2,
    correctAnswer: "Do",
  },
  {
    id: 10,
    question: "What does the phrase 'life-changing experience' refer to?",
    options: ["A small problem", "An event that significantly changes your life", "A regular event", "A random event"],
    image: "kanye_west.webp",
    weight: 3,
    correctAnswer: "An event that significantly changes your life",
  },
];

export interface PaymentType {
  code: string;
  price: number;
  url: string;
  title: string,
  subtitle?: string,
}

export const paymentTypes: Record<string, PaymentType> = {
  INDIVIDUAL_PRUEBA: {
    code: "INDIVIDUAL_PRUEBA",
    price: 6.99,
    url: "individual_prueba",
    title: "Reserva tu clase de prueba",
  },
  GRUPAL_BASICO: {
    code: "GRUPAL_BASICO",
    price: 49.99,
    url: "grupal_basico",
    title: "Únete al curso básico"
  },
  GRUPAL_INTERMEDIO: {
    code: "GRUPAL_INTERMEDIO",
    price: 59.99,
    url: "grupal_intermedio",
    title: "Únete al curso intermedio"
  },
  GRUPAL_INTENSIVO: {
    code: "GRUPAL_INTENSIVO",
    price: 69.99,
    url: "grupal_intensivo",
    title: "Únete al curso intensivo"
  },
  INDIVIDUAL_BASICO: {
    code: "INDIVIDUAL_BASICO",
    price: 99.99,
    url: "individual_basico",
    title: "Curso individual básico"
  },
  INDIVIDUAL_INTERMEDIO: {
    code: "INDIVIDUAL_INTERMEDIO",
    price: 109.99,
    url: "individual_intermedio",
    title: "Curso individual intermedio"
  },
  INDIVIDUAL_INTENSIVO: {
    code: "INDIVIDUAL_INTENSIVO",
    price: 119.99,
    url: "individual_intensivo",
    title: "Curso individual intensivo"
  }
};

export const socialMediaLinks = {
  instagram: "https://wa.link/qdrqdz",
  whatsapp: "https://wa.link/qdrqdz",
  whatsapp_paid: "https://wa.link/dj10c6"
}
