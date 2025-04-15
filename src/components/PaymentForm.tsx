"use client";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PaymentType } from "@/constants/constants";

interface PaymentFormProps {
  paymentType: PaymentType;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentType }) => {
  const amount = paymentType.price;

  const createOrder = async (data: any, actions: any) => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const orderData = await response.json();
    return orderData;
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full sm:w-full md:w-2/4 2xl:w-1/4"
      style={{ backgroundColor: "#FAF5DA" }}
    >
      <div className="p-6 space-y-6 overflow-auto">
        <h2 className="text-center text-3xl font-bold text-black ">
          {paymentType.title}
        </h2>

        {paymentType.subtitle && (
          <p className="text-black text-sm text-center">
            {paymentType.subtitle}
          </p>
        )}
        <div className="flex justify-center space-x-6 font-bold font-guru text-base">
          <button className="text-black py-2 px-4 hover:underline">Mañana</button>
          <button className="text-black py-2 px-4 hover:underline">Tarde</button>
          <button className="text-black py-2 px-4 hover:underline">Noche</button>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="h-12 w-full  pl-5 text-sm rounded-3xl border bg-[#151515] text-white"
          />
          <input
            type="text"
            placeholder="Correo electrónico"
            className="h-12 w-full  pl-5 rounded-3xl text-sm border bg-[#151515] text-white"
          />
        </div>

        <h1 className="h-12 text-center flex items-center justify-center border border-gray-300 bg-black text-white hover:shadow-lg">
          Valor total ${amount.toFixed(2)}
        </h1>

        <PayPalScriptProvider
          options={{
            clientId:
              process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
            "locale": "es_ES",
          }}
        >
          <PayPalButtons
            style={{ layout: "vertical", label: "checkout" }}
            fundingSource="paypal"
            createOrder={createOrder}
            onCancel={() => { console.log("Se canceló el pago") }}
          />
        </PayPalScriptProvider>

        <div className="flex items-center space-x-3">
          <input
            type="radio"
            className="rounded-full border-2 border-black w-5 h-5 "
          />
          <label className="text-black text-sm">
            Acepto las políticas de privacidad para el proceso de reservación
          </label>
        </div>

      </div>
    </div>
  );
};

export default PaymentForm;
