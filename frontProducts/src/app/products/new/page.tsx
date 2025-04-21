import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductForm } from "./product-form";

function ProductsNewPage() {

  return (
    <div className="hScreen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Create Product
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm/>
        </CardContent>
      </Card>
    </div>
  );
}
export default ProductsNewPage;
