"use client";
import { useCartStore } from "@/store/cart";
import { Product } from "@/type/product";
import React from "react";

const AddToCart = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <button
      onClick={() => {
        addToCart(product);
      }}
    >
      Dodaj
    </button>
  );
};

export default AddToCart;
