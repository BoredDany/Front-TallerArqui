import { Product } from "../models/product";

export type CreateProductDto = Omit<Product, "id" | "createdAt" | "updatedAt">;

export async function createProduct(productData: CreateProductDto): Promise<Product> {
  const res = await fetch("http://localhost:8001/api/crudProducts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!res.ok) {
    throw new Error("Failed to create product");
  }

  return await res.json(); 
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:8001/api/crudProducts/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return await res.json(); 
}

export async function deleteProduct(id: string){
  const res = await fetch(`http://localhost:8001/api/crudProducts/${id}/`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete product");
  }
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:8001/api/crudProducts/${id}/`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return await res.json(); 
}

export async function sellProduct(id: string, amount: number): Promise<{ message: string; stock_left: number }> {
  const res = await fetch(`http://localhost:8001/api/crudProducts/${id}/sell/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to sell product");
  }

  return await res.json();
}
