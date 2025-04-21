
import { getProduct } from "../products.api";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default async function ProductIdPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {product.name}:{product.id}
          <span className="text-sm text-gray-500">${product.price} USD</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{product.stock} in stock</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-x-2">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          <Pencil className="h-4 w-4" /> Update
        </Button>
      </CardFooter>
      </Card>
    </div>
  );
}
