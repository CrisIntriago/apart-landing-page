"use client" 

declare global {
  interface Window {
    paypal: any;
  }
}

const Payment: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido a REDACTEC</h1>
      <p>Haz tu compra ahora</p>
      <div id="paypal-button-container"></div>
    </div>
  );
}

export default Payment;
