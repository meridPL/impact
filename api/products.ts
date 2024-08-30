import { URL_API } from "@/globalVariable";
import { Product } from "@/type/product";

export const getProducts = async ({ category }: { category: string }) => {
  const result = await fetch(
    `${URL_API}/products/category/${category}`
  );
  if (result.ok) {
    return await result.json() as Product[];
  } else {
    return []
  }
}

