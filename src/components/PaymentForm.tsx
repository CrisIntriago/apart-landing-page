"use client"
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaymentForm: React.FC = () => {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center w-full md:w-2/4 2xl:w-1/4 sm:w-full sm:px-4"
            style={{ backgroundColor: "#FAF5DA" }}
        >
            <div className="p-6 space-y-6 overflow-auto">
                <h2 className="text-center text-4xl font-bold text-black">
                    Clase de prueba
                </h2>

                <div className="flex justify-center space-x-10">
                    <button className="text-black py-2 px-4">Mañana</button>
                    <button className="text-black py-2 px-4">Tarde</button>
                    <button className="text-black py-2 px-4">Noche</button>
                </div>

                <hr className="border-black" />

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full py-3 px-3 rounded-3xl border border-gray-300 bg-black text-white"
                    />
                    <input
                        type="text"
                        placeholder="Teléfono"
                        className="w-full py-3 px-3 rounded-3xl border border-gray-300 bg-black text-white"
                    />
                </div>

                <div className="flex space-x-4">
                    <select className="flex-1 py-3 px-4 rounded-3xl border border-gray-300 bg-black text-white">
                        <option value="">País</option>
                        <option value="mx">Ecuador</option>
                    </select>
                    <select className="flex-1 py-3 px-4 rounded-3xl border border-gray-300 bg-black text-white">
                        <option value="">Nivel de idioma</option>
                        <option value="basico">A2</option>
                    </select>
                </div>

                <h1 className="text-center rounded-3xl border border-gray-300 p-4 bg-black text-white hover:shadow-lg">
                    Valor total $7.00
                </h1>

                <button className="text-center rounded-3xl border border-gray-300 p-4 bg-gray-400 text-white w-full hover:shadow-lg">
                    Comprar
                </button>

                <PayPalScriptProvider
                    options={{
                        clientId: 'AXapmy9MuHVi2MuNqazMH3Hcl7lqoD0KvuDxsv4DGfKhv-eGHBadcVmzSvTKqmj4gNqnyGZf237RgTaF',
                    }}>
                    <PayPalButtons
                        style={{ layout: "vertical" }}  // Puedes configurar el diseño de los botones si lo deseas
                        fundingSource="paypal"  // Esto asegura que solo aparezca PayPal, no tarjetas

                    // createOrder={()=>{}}
                    // onCancel={()=>{}}
                    // onApprove={()=>{}}
                    />
                </PayPalScriptProvider>

                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        className="rounded-full border-2 border-black w-5 h-5 appearance-none checked:bg-black checked:border-black"
                    />
                    <label className="text-black text-md">Acepto las normas de privacidad para uso del proceso de reservación</label>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
