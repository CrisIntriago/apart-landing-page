import { NextResponse } from "next/server";
import { ordersController } from "../client";
import { ApiError, CheckoutPaymentIntent } from "@paypal/paypal-server-sdk";

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
