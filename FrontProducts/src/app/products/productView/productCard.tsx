"use client"

import { Product } from "@/app/models/product"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, ShoppingCart, Trash2 } from "lucide-react";

import { deleteProduct, sellProduct } from "../products.api";

import { useRouter } from "next/navigation";

export function ProductCard(product: Product) {

  const router = useRouter();

  async function handleDelete(id: string) {
    await deleteProduct(id);
    router.refresh();
  }

  async function handleSell(id: string) {
    await sellProduct(id, 1);
    router.refresh();
  }

  return (
    <Card key={product.id}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {product.name}
          <span className="text-sm text-gray-500">${product.price} USD</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{product.stock} in stock</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-x-2">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() => router.push(`/products/${product.id}/edit`)}
        >
          <Pencil className="h-4 w-4" />
        </Button>

        <Button variant="destructive"
          onClick={() => handleDelete(product.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>

        <Button className="bg-green-500 hover:bg-green-600 text-white"
          onClick={() => handleSell(product.id)}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
