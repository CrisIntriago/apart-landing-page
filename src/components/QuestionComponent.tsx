import React from "react";
import { Question } from "@/constants/constants";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ApartButton from "./ApartButton";

interface QuestionComponentsProps {
  progressPercentage: number;
  question: Question;
  handleBackClick: () => void;
  handleAnswerClick: (answer: string) => void;
}

const QuestionComponent: React.FC<QuestionComponentsProps> = ({
  progressPercentage,
  question,
  handleBackClick,
  handleAnswerClick,
}) => {
  return (
    <div className="div flex flex-col lg:w-auto  lg:flex-row lg:px-10  lg:gap-x-20  lg:mx-0">
      <div className="lg:w-1/2 flex flex-col justify-center mx-9">
        <img
          className="rounded-3xl hidden lg:block object-cover mx-auto w-[270px] h-[200px] lg:w-[600px] lg:h-[350px] flex justify-center items-center"
          src={`${process.env.NEXT_PUBLIC_CDN_URL}assessment-images/${question.image}`}
          alt="apart"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-between items-center md:mx-0 mx-9 md:py-6">
        <div className="w-full">
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="font-medium bg-[#996C52] text-xs  text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="w-full align-self: flex-start pt-4">
            <p
              onClick={handleBackClick}
              className="cursor-pointer flex items-center"
            >
              <KeyboardArrowLeftIcon className="mr-2" />
              Back
            </p>
          </div>
        </div>

        <p className="text-3xl text-center w-full">{question.question}</p>
        <div className="w-full flex flex-col items-center justify-center">
          <img
            className="rounded-3xl lg:hidden lg:pt-0 pt-4 object-cover mx-auto w-[270px] h-[200px] lg:w-[600px] lg:h-[500px] flex justify-center items-center pb-6"
            src={`${process.env.NEXT_PUBLIC_CDN_URL}assessment-images/${question.image}`}
            alt="apart"
          />
          <div className="flex flex-col gap-y-6 w-full">
            {question.options.map((option, index) => (
              <div className="mx-6 lg:mx-12" key={option}>
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

export default QuestionComponent;
