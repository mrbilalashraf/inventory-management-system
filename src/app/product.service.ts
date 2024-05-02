import { Injectable } from '@angular/core';
import { Product } from './models/product.model'; // Import your product model

@Injectable({
  providedIn: 'root' // Provide at root level
})
export class ProductService {
  private apiUrl = 'http://localhost:5288/api/product'; // Replace with your API endpoint

  // Get all products
  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${this.apiUrl}/GetAll`);
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }
    const responseJson = await response.json();
    return responseJson.data as Product[];
  }

  // Add a new product
  async addProduct(product: Product): Promise<Product> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    if (!response.ok) {
      console.log("not successful in adding product");
      console.log(response);
      throw new Error(`Error adding product: ${response.statusText}`);
    }
    return await response.json();
  }

  // Edit an existing product
  async editProduct(product: Product): Promise<Product> {
    const url = `${this.apiUrl}/${product.id}`; // Build URL with product ID
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    if (!response.ok) {
      throw new Error(`Error editing product: ${response.statusText}`);
    }
    return await response.json();
  }

  // Delete a product
  async deleteProduct(productId: number): Promise<void> {
    const url = `${this.apiUrl}/${productId}`; // Build URL with product ID
    const response = await fetch(url, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`Error deleting product: ${response.statusText}`);
    }
  }
}
