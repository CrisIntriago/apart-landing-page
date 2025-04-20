"use client";
import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useForm } from "react-hook-form";
import { PaymentType, socialMediaLinks } from "@/constants/constants";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

interface PaymentFormProps {
  paymentType: PaymentType;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentType }) => {
  const amount = paymentType.price;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    trigger,
  } = useForm({

    mode: "onChange",
  }
  );

  const [isFormComplete, setIsFormComplete] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Mañana");
  const [paymentCompleted, setPaymentStatus] = useState(false);


  const handleOptionClick = (option: string) => {
    setSelectedDay(option);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      setIsFormComplete(
        value.nombre && value.correo && value.telefono && value.acceptTerms
      );
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const values = getValues();

  const createOrder = async (data: any, actions: any) => {
    console.log("Nombre:", values.nombre);
    console.log("Correo:", values.correo);
    console.log("Teléfono:", values.telefono);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const orderData = await response.json();
    return orderData.id;
  };

  const handleApprove = async (data: any, actions: any) => {
    await fetch("/api/order-success", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          email: values.correo,
          name: values.nombre,
        }),
    });
    setPaymentStatus(true);
  };


  return (
    <div
      className="flex flex-col items-center justify-center w-full sm:w-full md:w-2/4 r:w-1/4 lg:py-6"
      style={{ backgroundColor: "#FAF5DA" }}
    >
      {!paymentCompleted ?

        (<div className="px-6" >
          <h2 className="text-center lg:text-5xl text-5xl font-bold text-black">{paymentType.title}</h2>

          {paymentType.subtitle && (
            <p className="text-black text-sm text-center font-bold font-guru px-10">{paymentType.subtitle}</p>
          )}
          <div className="flex justify-center space-x-6 font-bold font-guru text-base text-[#151515] pt-4">
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

          <form className="flex flex-col pt-6 gap-y-2">
            <input
              id="nombre"
              type="text"
              placeholder="Nombre completo"
              className="h-12 w-full pl-5 text-sm rounded-3xl border bg-[#151515] text-white"
              {...register("nombre", { required: "Este campo es obligatorio." })}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm pl-5">Este campo es obligatorio</p>
            )}

            <input
              id="correo"
              type="email"
              placeholder="Correo electrónico"
              className="h-12 w-full pl-5 rounded-3xl text-sm border bg-[#151515] text-white"
              {...register("correo", {
                required: "Ingresa un correo válido.",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Correo no válido",
                },
              })}
            />
            {errors.correo && (
              <p className="text-red-500 text-sm pl-5">Ingrese un correo válido</p>
            )}

            <input
              id="telefono"
              type="text"
              placeholder="Número de teléfono"
              className="h-12 w-full pl-5 rounded-3xl text-sm border bg-[#151515] text-white"
              {...register("telefono", { required: "Este campo es obligatorio" })}
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm pl-5">Este campo es obligatorio</p>
            )}


            <div className="flex items-center space-x-3 px-4 py-2">
              <input
                type="checkbox"
                className="rounded-full border-2 border-black w-5 h-5"
                {...register("acceptTerms", {
                  required: "Debes aceptar los términos y condiciones",
                })}
              />
              <label className="text-black text-sm">
                Acepto los términos y condiciones para la compra del servicio.
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-red-500 text-sm pl-8">Es obligatorio que acepte los términos</p>
            )}

          </form>
          <h1 className="text-center flex items-center justify-center text-black text-lg text-guru font-bold pb-2">
            Valor total ${amount.toFixed(2)}
          </h1>
          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
              locale: "es_ES",
            }}
          >
            <PayPalButtons
              style={{ layout: "vertical", label: "checkout" }}
              fundingSource="paypal"
              createOrder={createOrder}
              onCancel={() => {
                console.log("Se canceló el pago");
              }}
              onApprove={handleApprove}
              disabled={!isFormComplete}
            />
          </PayPalScriptProvider>

          <span className="flex items-center text-black text-sm font-guru text-center ml-5 gap-x-1 font-bold pt-2">
            Cualquier duda escríbenos por:
            <div className="flex items-center gap-x-1 ml-2">
              <a
                href={socialMediaLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25d366] hover:underline transition-colors duration-300"
              >
                <img
                  src="images/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5 hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#9b4dca] hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="images/instagram.svg"
                  alt="Instagram"
                  className="w-5 h-5 hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </span>

        </div>)

        :

        (
          <div className="flex flex-col items-center justify-center w-full sm:w-full px-10">
            <div className="flex flex-col items-center justify-center w-full">
              <h2 className="text-center lg:text-4xl text-4xl font-bold text-black">Bienvenido {values.nombre} 👋</h2>
              <h3 className="text-center lg:text-2xl text-2xl text-black mt-2 ">Estás listo para aprender inglés en nuestra comunidad APART</h3>
              <p className="text-center lg:text-xl text-sm mt-6 text-gray-600">Te hemos enviado un correo a <b>{values.correo}</b> y también nos pondremos en contacto contigo por tu número personal para coordinar las clases.</p>
              <p className="text-center lg:text-xl text-sm text-black mt-6 ">Cualquier duda escríbenos: </p>
              <span className="flex items-center text-black text-base font-guru text-center gap-x-1 font-bold mt-2">
                <div className="flex items-center justify-center gap-x-1">
                  <a
                    href={socialMediaLinks.whatsapp_paid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25d366] hover:underline transition-colors duration-300"
                  >
                    <img
                      src="images/whatsapp.svg"
                      alt="WhatsApp"
                      className="w-7 h-7 hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <a
                    href={socialMediaLinks.whatsapp_paid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#9b4dca] hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src="images/instagram.svg"
                      alt="Instagram"
                      className="w-7 h-7 hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </div>
              </span>
              <div className="text-sm flex flex-col items-center justify-center gap-x-1 mt-4 text-gray-600">
                <p>
                  <a
                    href={socialMediaLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#9b4dca] hover:underline transition-colors duration-300"
                  >
                    @study-apart
                  </a>
                </p>
                <p>
                  <a
                    href={socialMediaLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25d366] hover:underline transition-colors duration-300"
                  >
                    +593 96 060 7444
                  </a>
                </p>
              </div>
            </div>



          </div>
        )}

    </div>
  );
};

export default PaymentForm;
