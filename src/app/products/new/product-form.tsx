"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import {createProduct} from "../new/products.api";

export function ProductForm() {
    const {register, handleSubmit} = useForm()

    const onsubmit = handleSubmit(async(data) => {
        console.log(data);
        await createProduct(data);
    })
    return (
        <form onSubmit={onsubmit}>
            <Label>Product Name</Label>
            <Input
                {...register("name", {required: true})}
            />

            <Label>Price</Label>
            <Input
                type="number"
                {...register("price", {required: true})}
            />

            <Label>Stock</Label>
            <Input
                type="number"
                {...register("stock", {required: true})}
            />

            <Button>
              Create Product
            </Button>
        </form>
    );
}