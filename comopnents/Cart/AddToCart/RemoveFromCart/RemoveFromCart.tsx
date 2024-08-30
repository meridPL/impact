"use client";
import { useCartStore } from "@/store/cart";
import React from "react";

const RemoveFromCart = ({ productId }: { productId: number }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <button
      onClick={() => {
        removeFromCart(productId);
      }}
    >
      Usuń
    </button>
  );
};

export default RemoveFromCart;
