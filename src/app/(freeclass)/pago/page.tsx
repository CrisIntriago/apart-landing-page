"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation"; // Use useSearchParams from next/navigation
import PaymentForm from "@/components/PaymentForm";
import CarrouselPayment from "@/components/CarrouselPayment";
import { paymentTypes, PaymentType } from "@/constants/constants";

// Client-side component that uses search params
const FreeClassContent = () => {
  const searchParams = useSearchParams(); // Access query parameters
  const oferta = searchParams.get("oferta");

  let selectedPaymentType: PaymentType;

  switch (oferta) {
    case paymentTypes.GRUPAL_BASICO.url:
      selectedPaymentType = paymentTypes.GRUPAL_BASICO;
      break;
    case paymentTypes.GRUPAL_INTERMEDIO.url:
      selectedPaymentType = paymentTypes.GRUPAL_INTERMEDIO;
      break;
    case paymentTypes.GRUPAL_INTENSIVO.url:
      selectedPaymentType = paymentTypes.GRUPAL_INTENSIVO;
      break;
    case paymentTypes.INDIVIDUAL_BASICO.url:
      selectedPaymentType = paymentTypes.INDIVIDUAL_BASICO;
      break;
    case paymentTypes.INDIVIDUAL_INTERMEDIO.url:
      selectedPaymentType = paymentTypes.INDIVIDUAL_INTERMEDIO;
      break;
    case paymentTypes.INDIVIDUAL_INTENSIVO.url:
      selectedPaymentType = paymentTypes.INDIVIDUAL_INTENSIVO;
      break;
    case paymentTypes.INDIVIDUAL_PRUEBA.url:
      selectedPaymentType = paymentTypes.INDIVIDUAL_PRUEBA;
      break;
    default:
      selectedPaymentType = paymentTypes.INDIVIDUAL_PRUEBA;
      break;
  }

  return (
    <div className="flex flex-col min-h-screen h-screen bg-[#FAF5DA]">
      <h1 className="bg-black w-full lg:px-32 py-3 text-4xl font-bold text-[#FAF5DA]">
        <a href="/">APART</a>
      </h1>
      <div className="flex sm:flex-row h-full">
        <CarrouselPayment />
        <PaymentForm paymentType={selectedPaymentType} />
      </div>
    </div>
  );
};

// Main component that wraps the client-side component in Suspense
const FreeClass = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FreeClassContent />
    </Suspense>
  );
};

export default FreeClass;
