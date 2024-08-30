import { getProducts } from "@/api/products";
import ListProducts from "@/comopnents/Products/ListProducts/ListProducts";
import React from "react";

const CategoryPage = async ({ params }: { params: { name: string } }) => {
  const products = await getProducts({ category: params.name });

  return (
    <div>
      {/* Used inline style becaouse is easier than create a class or scss file */}
      <h1 style={{ paddingBottom: "2rem" }}>
        {decodeURIComponent(params.name)} ({products.length})
      </h1>
      <ListProducts category={params.name} dynamic />
    </div>
  );
};

export default CategoryPage;
