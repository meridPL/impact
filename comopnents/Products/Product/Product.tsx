"use client";
import AddToCart from "@/comopnents/Cart/AddToCart/AddToCart";
import RemoveFromCart from "@/comopnents/Cart/AddToCart/RemoveFromCart/RemoveFromCart";
import { Product as ProductType } from "@/type/product";
import React from "react";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import style from "./product.module.scss";
import { CURRENCY } from "@/globalVariable";
const Product = ({
  product,
  addButton,
  removeButton,
  showInputQuantity,
}: {
  product: ProductType;
  addButton?: boolean;
  removeButton?: boolean;
  showInputQuantity?: boolean;
}) => {
  const changeQuantity = useCartStore((state) => state.changeQuantity);
  const cart = useCartStore((state) => state.cart);
  return (
    <div className={style.content}>
      <Image
        src={product.image}
        width={200}
        height={200}
        alt={product.title}
        style={{
          objectFit: "contain",
        }}
      />
      <p>{product.title}</p>
      <p className={style.price}>
        {product.price} {CURRENCY}
      </p>
      {showInputQuantity && (
        <input
          value={
            cart.find((productIn) => productIn.id === product.id)?.quantity || 0
          }
          onChange={(event) =>
            changeQuantity({
              ...product,
              quantity: Number((event.target as HTMLInputElement).value),
            })
          }
        />
      )}
      {addButton && <AddToCart product={product} />}
      {removeButton && <RemoveFromCart productId={product.id} />}
    </div>
  );
};

export default Product;
