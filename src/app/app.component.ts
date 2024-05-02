import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ProductsComponent, SalesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventory-management-system';
}
