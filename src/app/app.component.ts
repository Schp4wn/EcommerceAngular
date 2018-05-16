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
  addToCart(event, product) {
    // L'élément qu'on ajoutera dans le panier
    let cartItem = {
      product: product,
      quantity: event.quantity
    };
    // Booléen qui nous permettra de savoir si le produit est déjà dans le panier
    let productIsInCart = false;

    // La boucle suivante permet d'éviter d'avoir un doublon de produit dans le panier et de simplement mettre à jour la quantité
    this.cart.forEach((element, index) => {
      // Si le produit est dans le panier, on met seulement à jour sa quantité
      if (element.product.id === product.id) {
        this.cart[index].quantity = event.quantity;
        productIsInCart = true;
      }
    });

    // Si le produit n'est pas dans le panier, on l'ajoute
    if (!productIsInCart) {
      this.cart.push(cartItem);
    }
  }
}
