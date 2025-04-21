import { ApiError, CheckoutPaymentIntent, Client, Environment, LogLevel, OrdersController } from '@paypal/paypal-server-sdk';

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const isProduction = process.env.ENVIRONMENT === 'production';

console.log(process.env.ENVIRONMENT);
console.log('isProduction', isProduction);

const environment = isProduction  ? Environment.Production : Environment.Sandbox;

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: clientId!,
    oAuthClientSecret: clientSecret!
  },
  timeout: 0,
  environment: environment,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});

const ordersController = new OrdersController(client);


export { ordersController };
