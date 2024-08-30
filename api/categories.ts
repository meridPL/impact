import { URL_API } from "@/globalVariable";

export const getCategories = async () => {
  const result = await fetch(
    `${URL_API}/products/categories`
  );
  if (result.ok) {
    return await result.json() as string[];
  } else {
    return []
  }
}

