import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EditProductForm } from "./edit-product-form";
import { getProduct } from "../../products.api";

export default async function ProductsEditPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const product = await getProduct(id); // Obtener el producto con el id

  return (
    <div className="hScreen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Edit Product</CardTitle>
        </CardHeader>
        <CardContent>
          <EditProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}
