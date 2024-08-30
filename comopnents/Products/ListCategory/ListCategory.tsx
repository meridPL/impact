import Link from "next/link";
import React, { Suspense } from "react";
import ListProducts from "../ListProducts/ListProducts";
import style from "./ListCategory.module.scss";
import { getCategories } from "@/api/categories";
import clsx from "clsx";
const ListCategory = async ({
  showProducts,
  showLinkAllCategory,
  smallerGap,
}: {
  showProducts?: boolean;
  showLinkAllCategory?: boolean;
  smallerGap?: boolean;
}) => {
  const categories = await getCategories();

  return (
    <div>
      <h1 className={style.title}>Category</h1>
      <div className={clsx(style.list, smallerGap && style.smallerGap)}>
        {showLinkAllCategory && (
          <Link href={`/category`} className="link">
            <h2>Show all</h2>
          </Link>
        )}
        {categories.map((category: string) => {
          return (
            <div key={category}>
              <Link href={`/category/${category}`} className="link">
                <h2 className={style.category}>{category}</h2>
              </Link>
              <Suspense fallback={<p>Loading..</p>}>
                {showProducts && <ListProducts category={category} />}
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListCategory;
