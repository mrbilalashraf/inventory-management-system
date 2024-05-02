import { SaleService } from './../sale.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {} as Product; // Initialize new product object
  selectedProduct: Product | null = null;
  copiedProduct: Product = {} as Product;

  constructor(private productService: ProductService, private saleService: SaleService) { }

  ngOnInit() {
    this.getProducts();
  }
  
  deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T;
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.copiedProduct = this.deepCopy(product);
  }

  clearSelected(): void {
    this.selectedProduct = null;
  }

  async getProducts() {
    try {
      this.products = await this.productService.getProducts();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  async addProduct() {
    if (!this.newProduct.name || !this.newProduct.description || !this.newProduct.quantity) {
      console.error('Please fill in all product details.');
      return; // Prevent adding incomplete product
    }
    try {
      const addedProduct = await this.productService.addProduct(this.newProduct);
      this.products.push(addedProduct); // Update local product list
      this.newProduct = {} as Product; // Clear new product form
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  async editProduct() {
    if (!this.selectedProduct) {
      console.error('Please select a product to edit.');
      return;
    }
    try {
      const quantityChange = this.copiedProduct.quantity - this.selectedProduct.quantity;
      const updatedProduct = await this.productService.editProduct(this.selectedProduct);
      const productIndex = this.products.findIndex(p => p.id === updatedProduct.id);
      if (productIndex !== -1) {
        this.products[productIndex] = updatedProduct;
      }
      if (this.copiedProduct.quantity >  this.selectedProduct.quantity)
        await this.saleService.updateSale(this.selectedProduct.id, quantityChange, this.selectedProduct)
      this.selectedProduct = null; // Clear selected product after successful edit
    } catch (error) {
        console.error('Error editing product:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }

  async deleteProduct(productId: number) {
    const confirmation = confirm('Are you sure you want to delete this product?');
    if (!confirmation) {
      return;
    }
    try {
      await this.productService.deleteProduct(productId);
      this.products = this.products.filter(p => p.id !== productId); // Update local product list
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }
}
