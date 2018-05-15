import { Component } from '@angular/core';
import { PRODUCTS } from './mock/product.mock';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  productList: Product[] = PRODUCTS;
}
