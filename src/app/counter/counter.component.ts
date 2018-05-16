import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  value: number = 0;
  @Output() incremented: EventEmitter<any> = new EventEmitter();
  @Input() product: Product;

  increment() {
    this.value++;
    // On emet un événement à chaque fois que le bouton "buy" est cliqué. Dans l'événement, on envoie des informations comme le produit qui a été acheté et la quantité actuelle de ce produit.
    this.incremented.emit({
      //id: this.product.id,
      quantity: this.value,
      //product: this.product
    });
  }
}
