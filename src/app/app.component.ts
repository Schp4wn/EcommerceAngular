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
  cart: Array<any> = [];

  // Appellé uniquement quand le bouton "buy" est cliqué
  log(event) {
    console.log(event);
    var idProduct = event.id;

    for (let element of this.cart) {
      if (element.id === idProduct) {
        return;
      }
    }

    this.cart.push(event);
  }
}
