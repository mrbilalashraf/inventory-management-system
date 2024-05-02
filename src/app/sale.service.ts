import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

interface Sale {
  productId: number;
  product: { id: number, name: string, description: string, quantity: number };
  quantitySold: number;
}

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl = 'http://localhost:5288/api/sale'; // Replace with your actual API URL

  // Get all sales
  async getSales(): Promise<Sale[]> {
    const response = await fetch(`${this.apiUrl}/GetAll`);
    if (!response.ok) {
      throw new Error(`Error fetching sales: ${response.statusText}`);
    }
    const responseJson = await response.json();
    return responseJson.data as Sale[];
  }

  // Update sale quantity
  async updateSale(productId: number, quantitySold: number, product: Product ): Promise<void> {
    const url = `${this.apiUrl}/${productId}`;
    const saleData = { productId, quantitySold, product };
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saleData)
    });
    if (!response.ok) {
      throw new Error(`Error updating sale: ${response.statusText}`);
    }
  }
}
