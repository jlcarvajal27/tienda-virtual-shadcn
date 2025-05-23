"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import React from "react";
import CartItem from "./components/cart-item";

export default function page() {
  const { items, removeAll } = useCart();

  const prices = items.map((item) => item.price);
  const total = prices.reduce((acc, price) => acc + price, 0);
  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 ">
      <h1 className="mb-5 text-3xl font-bold"> Shopping cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && <p>No hay productos en el carrito </p>}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100">
            <p className="mb-3 text-lg font-semibold">Order Summary</p>
            <hr />
            <div className="flex justify-between my-4 gap-5">
              <p>Order total</p>
              <p> {total}$ </p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full" onClick={() => console.log("comprar")}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
