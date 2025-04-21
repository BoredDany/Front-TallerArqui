"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { createProduct, CreateProductDto } from "../products.api";
import { useRouter } from "next/navigation";

export function ProductForm() {
  const { register, handleSubmit } = useForm<CreateProductDto>(); 
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await createProduct(data); 
    router.push("/");
    router.refresh(); // Refresh the page to see the new product
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          {...register("name", { required: true })}
        />
      </div>

      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          step="0.01"
          {...register("price", { required: true, valueAsNumber: true })}
        />
      </div>

      <div>
        <Label htmlFor="stock">Stock</Label>
        <Input
          id="stock"
          type="number"
          {...register("stock", { required: true, valueAsNumber: true })}
        />
      </div>

      <Button type="submit">Create Product</Button>
    </form>
  );
}
