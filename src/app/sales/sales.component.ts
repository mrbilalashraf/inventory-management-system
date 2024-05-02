import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Sale {
  productId: number;
  product: { id: number, name: string, description: string, quantity: number };
  quantitySold: number;
}

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.getSales();
  }

  async getSales() {
    try {
      this.sales = await this.saleService.getSales();
      console.log(this.sales);
    } catch (error) {
      console.error('Error fetching sales:', error);
    }
  }
  async updateQuantity(sale: Sale) {
    try {
      await this.saleService.updateSale(sale.productId, sale.quantitySold, sale.product);
    } catch (error) {
      console.error('Error editing sale:', error);
    }    
  }
}
