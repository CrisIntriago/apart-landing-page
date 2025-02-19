"use client"
import { useState } from 'react';
import { questions } from '@/constants/constants';
import { useRouter } from 'next/navigation';
import ApartButton from '@/components/ApartButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Image from 'next/image';

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
      router.push('/oferta');
    }
  };


  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

  if (!currentQuestion) {
    return <div>¡Has completado el cuestionario!</div>;
  }

  return (
    <div className="div flex flex-col md:flex-row md:px-20  md:gap-x-20">
      <div className="md:w-1/2">
        <Image
          className="object-cover mx-auto"
          src={`${process.env.NEXT_PUBLIC_CDN_URL}${currentQuestion.image}`}
          alt="apart"
          width={400} 
          height={300}
        />

      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <div className="w-full bg-gray-200 rounded-full">
          <div
            className="bg-[#996C52] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${progressPercentage}%` }}
          >
          </div>
        </div>
        <div className="w-full align-self: flex-start pt-4">
          <p onClick={handleBackClick} className="cursor-pointer flex items-center">
            <KeyboardArrowLeftIcon className="mr-2" />
            Back
          </p>
        </div>
        <br />
        <div className="w-full flex flex-col items-center">
          <p className="text-3xl pb-8 text-center">
            {currentQuestion.question}
          </p>
          <div className="flex flex-col gap-y-6">
            {currentQuestion.options.map((option, index) => (
              <ApartButton
                key={index}
                text={option}
                onClick={() => handleAnswerClick(option)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

};

export default QuizModule;