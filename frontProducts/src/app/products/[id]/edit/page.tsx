import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EditProductForm } from "./edit-product-form";
import { getProduct } from "../../products.api";

async function ProductsEditPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);
    return (
        <div className="hScreen flex items-center justify-center">
        <Card>
            <CardHeader>
            <CardTitle>Edit Product</CardTitle>
            </CardHeader>
            <CardContent>
            <EditProductForm product = {product} />
            </CardContent>
        </Card>
        </div>
    );
}
export default ProductsEditPage;
