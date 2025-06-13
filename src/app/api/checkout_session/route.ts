// src/app/api/checkout_session/route.ts
import { coffeeProducts } from "@/data/coffe-products";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  typescript: true,
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { message: "No items provided." },
        { status: 400 }
      );
    }

    const line_items_for_stripe = [];

    for (const item of items) {
      const productId = item.id;
      const quantity = item.quantity;

      if (typeof quantity !== "number" || quantity <= 0) {
        return NextResponse.json(
          { message: `Invalid quantity for product ID ${productId}.` },
          { status: 400 }
        );
      }

      const productData = coffeeProducts.find((p) => p.id === productId);

      if (!productData) {
        return NextResponse.json(
          { message: `Product with ID ${productId} not found.` },
          { status: 404 }
        );
      }

      const unit_amount_cents = Math.round(productData.price * 100);

      line_items_for_stripe.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: productData.title,
          },
          unit_amount: unit_amount_cents,
        },
        quantity: quantity,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items_for_stripe,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (err: any) {
    console.error("Error creating Stripe Checkout session:", err);
    return NextResponse.json(
      { statusCode: 500, message: err.message },
      { status: 500 }
    );
  }
}
