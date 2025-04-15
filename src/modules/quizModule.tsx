"use client";
import { useState, useEffect } from "react";
import { questions } from "@/constants/constants";
import QuestionComponent from "@/components/QuestionComponent";
import ChooseOptionComponent from "@/components/ChooseOptionComponent";

type SelectedAnswers = {
  [key: number]: string;
};

const QuizModule = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [fade, setFade] = useState<boolean>(false); // Estado para controlar el fade
  const [score, setScore] = useState<number>(0); // Almacenar el puntaje
  const [level, setLevel] = useState<string>(""); // Nivel de inglés
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false); // Para rastrear si el cuestionario ha terminado

  const handleAnswerClick = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    // Verificar si la respuesta seleccionada es correcta y actualizar el puntaje
    if (answer === correctAnswer) {
      setScore((prevScore) => prevScore + currentQuestion.weight);
    }

    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));

    // Iniciar fadeout
    setFade(true);

    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setFade(false); // Iniciar fadein
    }, 600); // Esto debe coincidir con la duración del fadeout
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

  useEffect(() => {
    if (currentQuestionIndex === totalQuestions) {
      // Calcular el nivel de inglés después de que el usuario complete el cuestionario
      let userLevel = "";
      if (score <= 9) userLevel = "A1";
      else if (score <= 14) userLevel = "A2";
      else if (score <= 19) userLevel = "B1";
      else userLevel = "B2";

      setLevel(userLevel);

      // Guardar el puntaje y nivel en localStorage
      localStorage.setItem("quizScore", score.toString());
      localStorage.setItem("englishLevel", userLevel);

      // Marcar que el cuestionario ha terminado
      setIsQuizCompleted(true);


    }

    if (localStorage.getItem("englishLevel")) {
      setIsQuizCompleted(true);
      setLevel(localStorage.getItem("englishLevel")!);
    }
  }, [currentQuestionIndex, score, totalQuestions]);

  if (isQuizCompleted) {
    // Si el cuestionario está completo, mostrar ChooseOptionComponent
    return <ChooseOptionComponent level={level} />;
  }

  if (!currentQuestion) {
    // Si no hay más preguntas, no mostrar nada
    return <ChooseOptionComponent level={level} />;
  }

  return (
    <div
      className={`transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"
        }`}
    >
      {!isQuizCompleted && <QuestionComponent
        key={currentQuestion.id}
        progressPercentage={progressPercentage}
        question={currentQuestion}
        handleBackClick={handleBackClick}
        handleAnswerClick={handleAnswerClick}
      />}
    </div>
  );
};

export default QuizModule;
