import React from "react";
import VideoSection from "@/components/VideoSection";
import PaymentForm from "@/components/PaymentForm";

const FreeClass = () => {
  return (
    <>
      <a href="/">
        <h1 className="bg-black p-5 text-4xl font-bold">APART</h1>
      </a>

      <div className="flex sm:flex-row">
        <VideoSection />
        <PaymentForm />
      </div>
    </>
  );
};

export default FreeClass;
