import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
  { path: 'sales', component: SalesComponent },
];
