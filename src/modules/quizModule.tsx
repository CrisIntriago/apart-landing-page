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

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
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
    <QuestionComponent
      progressPercentage={progressPercentage}
      question={currentQuestion}
      handleBackClick={handleBackClick}
      handleAnswerClick={handleAnswerClick}
    />
  );
};

export default QuizModule;
