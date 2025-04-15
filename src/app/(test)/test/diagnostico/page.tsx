import QuizModule from "@/modules/quizModule";

export default function Diagnostico() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#151515]">
      <div className="lg:w-[1024px]">
        <QuizModule />
      </div>
    </div>
  );
}
