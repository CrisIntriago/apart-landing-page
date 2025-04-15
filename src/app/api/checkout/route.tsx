import { ApiError, CheckoutPaymentIntent, Client, Environment, LogLevel, OrdersController } from '@paypal/paypal-server-sdk';
import { NextResponse } from 'next/server';

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: clientId!,
    oAuthClientSecret: clientSecret!
  },
  timeout: 0,
  environment: Environment.Sandbox,
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

export async function POST(request: any) {
  const { amount } = await request.json(); 

  if (!amount || isNaN(amount)) {
    return NextResponse.json({
      error: 'Invalid amount provided'
    }, { status: 400 });
  }

  const collect = {
    body: {
      intent: CheckoutPaymentIntent.Capture,
      purchaseUnits: [
        {
          amount: {
            currencyCode: 'USD',
            value: amount.toString(),
          },
        }
      ],
    },
    prefer: 'return=minimal'
  };

  try {
    const { result, ...httpResponse } = await ordersController.createOrder(collect);
    console.log(result);
    return NextResponse.json({
      id: result.id
    });
  } catch (error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      console.error(errors);
    }
    return NextResponse.json({
      error: 'Failed to create order'
    }, { status: 500 });
  }
}
