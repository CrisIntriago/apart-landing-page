"use client" 
import { useEffect } from 'react';

declare global {
  interface Window {
    paypal: any;
  }
}

const Payment: React.FC = () => {
  useEffect(() => {
    // Cargar el SDK de PayPal
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=buttons`;
    script.addEventListener('load', () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder(data: any, actions: any) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '50.00', // Aquí puedes poner el precio de tu producto o servicio
                  },
                },
              ],
            });
          },
          onApprove(data: any, actions: any) {
            return actions.order.capture().then((details: any) => {
              alert('Pago completado por ' + details.payer.name.given_name);
            });
          },
        }).render('#paypal-button-container');
      }
    });
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Bienvenido a REDACTEC</h1>
      <p>Haz tu compra ahora</p>
      <div id="paypal-button-container"></div>
    </div>
  );
}

export default Payment;
