"use client";
import Product from "@/comopnents/Products/Product/Product";
import { useCartStore } from "@/store/cart";
import React, { useEffect } from "react";
import style from "../../comopnents/Products/ListProducts/ListProducts.module.scss";
import { CURRENCY } from "@/globalVariable";
const CartPage = () => {
  const { cart, initCart, getSummary } = useCartStore(
    ({ cart, initCart, getSummary }) => ({
      cart,
      initCart,
      getSummary,
    })
  );
  useEffect(() => {
    initCart();
  }, []);

  return (
    <div>
      <h1>Card Page</h1>

      <div className={style.content}>
        {cart.map((product) => (
          <Product
            product={product}
            key={product.id}
            removeButton
            showInputQuantity
          />
        ))}
      </div>
      <div
        style={{
          paddingTop: "3rem",
        }}
      >
        <h2>
          Summary: {Math.floor(getSummary() * 10) / 100} {CURRENCY}
        </h2>
      </div>
    </div>
  );
};

export default CartPage;
