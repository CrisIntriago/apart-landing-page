"use client"
import { useState } from 'react';
import { questions } from '@/constants/constants';
import { useRouter } from 'next/navigation';
import ApartButton from '@/components/ApartButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';
import VideoComponent from '@/components/VideoComponent';

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
      router.push('/test');
    }
  };


  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

  if (!currentQuestion) {
    return (
      <div className="div flex flex-col md:flex-row md:px-20  md:gap-x-20">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <div className="md:w-1/2 flex flex-col justify-center">
            <VideoComponent
              url="last_test.webm"
              className='hidden md:block object-cover mx-auto min-w-[270px] h-[200px] md:w-[800px] md:h-[350px] justify-center items-center' />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-left">
          <div className="hidden md:block w-full pt-24">
            <p onClick={handleBackClick} className="cursor-pointer flex items-left">
              <KeyboardArrowLeftIcon className="md:mr-2" />
              Back
            </p>
          </div>
          <br className="hidden md:block" />
          <div className="w-full pt-2 md:pt-0 flex flex-col justify-center items-left ">
            <div className='flex flex-col justify-center md:justify-start text-center md:text-left'>
              <p className="text-3xl md:text-xl pb-4 md:pb-6 md:text-left font-bold">
                La realidad es flexible
              </p>
              <p className="text-xl pb-3 md:text-left md:pb-4">
                Nivel de inglés
              </p>
              <p className="text-xl pb-3 md:pb-4 md:text-left font-bold">
                A2
              </p>
              <p className="text-xl pb-3 md:pb-4 md:text-left">
                Duración del módulo:
              </p>
              <p className="text-xl pb-3 md:pb-4 md:text-left font-bold">
                4 meses
              </p>
            </div>

            <div className="flex flex-col pb-10 px-4 md:px-0 gap-y-4">
              <Link href={"/payment"}>
                <ApartButton text='Comprar' onClick={() => { }} />

              </Link>
              <Link href={"/class"}>
                <ApartButton text='Reserva una clase de prueba' onClick={() => { }} />
              </Link>

            </div>
            <VideoComponent
              className="md:hidden object-cover mx-auto w-[270px] h-[200px] md:w-[600px] md:h-[500px] flex justify-center items-center pb-6"
              url="last_test.webm"
            />

          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="div flex flex-col md:flex-row md:px-20  md:gap-x-20">
      <div className="md:w-1/2 flex flex-col justify-center">
        <img
          className="hidden md:block object-cover mx-auto w-[270px] h-[200px] md:w-[600px] md:h-[350px] flex justify-center items-center"
          src={`${process.env.NEXT_PUBLIC_CDN_URL}assessment-images/${currentQuestion.image}`}
          alt="apart"

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

          <img
            className="md:hidden object-cover mx-auto w-[270px] h-[200px] md:w-[600px] md:h-[500px] flex justify-center items-center pb-6"
            src={`${process.env.NEXT_PUBLIC_CDN_URL}assessment-images/${currentQuestion.image}`}
            alt="apart"

          />
          <div className="flex flex-col gap-y-6 w-full">
            {currentQuestion.options.map((option, index) => (
              <div className='mx-6' key={option}>
                <ApartButton
                  key={index}
                  text={option}
                  onClick={() => handleAnswerClick(option)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

};

export default QuizModule;