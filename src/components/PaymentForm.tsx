"use client";
import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PaymentType } from "@/constants/constants";

interface PaymentFormProps {
  paymentType: PaymentType;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentType }) => {

  const amount = paymentType.price;

  type FormFields = {
    nombre: string;
    correo: string;
    telefono: string;
    acceptTerms: boolean;
  }


  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Mañana"); // Establecer "Mañana" como opción predeterminada

  const handleOptionClick = (option: string) => {
    setSelectedDay(option);
  };

  useEffect(() => {
    if (nombre && correo && telefono && acceptTerms) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [nombre, correo, telefono, acceptTerms]);

  const createOrder = async (data: any, actions: any) => {
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Teléfono:', telefono);
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const orderData = await response.json();
    return orderData.id;
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
        <div className="flex justify-center space-x-6 font-bold font-guru text-base text-[#151515]">
          <span
            className={`cursor-pointer ${selectedDay === "Mañana" ? "underline" : ""}`}
            onClick={() => handleOptionClick("Mañana")}
            style={{
              transition: "text-decoration 0.3s ease",
            }}
          >
            Mañana
          </span>
          <span
            className={`cursor-pointer ${selectedDay === "Tarde" ? "underline" : ""}`}
            onClick={() => handleOptionClick("Tarde")}
            style={{
              transition: "text-decoration 0.3s ease", 
            }}
          >
            Tarde
          </span>
          <span
            className={`cursor-pointer ${selectedDay === "Noche" ? "underline" : ""}`}
            onClick={() => handleOptionClick("Noche")}
            style={{
              transition: "text-decoration 0.3s ease", 
            }}
          >
            Noche
          </span>
        </div>

          <form className="flex flex-col space-y-4">
            <input
              id="nombre"
              type="text"
              placeholder="Nombre completo"
              className="h-12 w-full  pl-5 text-sm rounded-3xl border bg-[#151515] text-white"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              id="correo"
              type="email"
              placeholder="Correo electrónico"
              className="h-12 w-full  pl-5 rounded-3xl text-sm border bg-[#151515] text-white"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <input
              id="telefono"
              type="text"
              placeholder="Número de teléfono"
              className="h-12 w-full  pl-5 rounded-3xl text-sm border bg-[#151515] text-white"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </form>

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
            disabled={!isFormComplete}
          />
        </PayPalScriptProvider>

        <div className="flex items-center space-x-3">
          <input
            type="radio"
            className="rounded-full border-2 border-black w-5 h-5 "
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          <label className="text-black text-sm">
            Acepto los términos y condiciones para la compra del servicio.
          </label>
        </div>

      </div>
    </div>
  );
};

export default PaymentForm;
