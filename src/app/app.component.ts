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
  // La liste des produits qui sera parcourue dans le template
  productList: Product[] = PRODUCTS;

  // Appellé uniquement quand le bouton "buy" est cliqué
  log(event) {
    console.log(event);
  }
}
