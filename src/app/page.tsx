import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getProducts } from "./products/products.api";

import { Product } from "./models/product";
import { Fragment } from "react";

import { ProductCard } from "./products/productView/productCard";

export const dynamic = "force-dynamic";

async function page() {
  const res: Product[] = await getProducts();

  return (
    <Fragment>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Magic Store</h1>

        <Link href="/products/new" className={buttonVariants()}>
          Create New Product
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-8">
        {res.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </Fragment>
  );
}
export default page;