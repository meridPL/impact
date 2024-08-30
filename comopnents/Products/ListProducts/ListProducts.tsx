import { getProducts } from "@/api/products";
import React from "react";
import Product from "../Product/Product";
import style from "./ListProducts.module.scss";
const ListProducts = async ({
  category,
  dynamic,
}: {
  category: string;
  dynamic?: boolean;
}) => {
  const products = await getProducts({ category });

  return (
    <div className={style.content}>
      {products
        .filter((product, index) => (!dynamic ? index < 4 : true))
        .map((product) => (
          <Product key={product.id} product={product} addButton />
        ))}
    </div>
  );
};

export default ListProducts;
