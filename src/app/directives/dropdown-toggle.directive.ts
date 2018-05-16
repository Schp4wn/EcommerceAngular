import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdownToggle]'
})
export class DropdownToggleDirective {

  constructor(public elementHTML: ElementRef) {
    // On peut récupérer l'élement natif en javascript
    // nativeElement équivaut à document.getElementBy
    console.log(this.elementHTML.nativeElement);
  }

  // addEventListener en mode Angular
  @HostListener('click') toggleDropdown() {
    console.log(this.elementHTML.nativeElement);

    // On récupére l'élément suivant la balise a.dropdown-toggle
    let nextElement = this.elementHTML.nativeElement.nextElementSibling;
    // On ajoute la classe show ou on l'enlève si elle est déjà présente
    nextElement.classList.toggle('show');
  }

  /*@HostListener('document:click', ['$event']) closeDropdown(event) {
    console.log(event.target);
    // Si on clique n'importe où sur la page sauf sur le dropdown, on ferme le dropdown
    if (event.target !== this.elementHTML.nativeElement) {
      let nextElement = this.elementHTML.nativeElement.nextElementSibling;
      nextElement.classList.remove('show');
    }
  }*/

}
