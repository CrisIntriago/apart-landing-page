"use client";
import { useState } from "react";
import { questions } from "@/constants/constants";
import { useRouter } from "next/navigation";
import QuestionComponent from "@/components/QuestionComponent";
import ChooseOptionComponent from "@/components/ChooseOptionComponent";

type SelectedAnswers = {
  [key: number]: string;
};

const QuizModule = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [fade, setFade] = useState<boolean>(false); // Estado para controlar el fade

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));

    // Iniciar fadeout
    setFade(true);

    setTimeout(() => {
      // Después de 600ms (tiempo de la animación fadeout), pasar a la siguiente pregunta
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setFade(false); // Iniciar fadein
    }, 600); // Esto debe coincidir con la duración del fadeout
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else {
      router.push("/test");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

  if (!currentQuestion) {
    return <ChooseOptionComponent />;
  }

  return (
    <div
      className={`transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <QuestionComponent
        progressPercentage={progressPercentage}
        question={currentQuestion}
        handleBackClick={handleBackClick}
        handleAnswerClick={handleAnswerClick}
      />
    </div>
  );
};

export default QuizModule;
