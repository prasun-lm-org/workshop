import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Product[] = [];
  totalCount:number = 0;

  constructor() { }

  add(product: Product) {
    const chkProductExistInCart = this.cartProducts.find(({id}) => id === product.id); // find product by id
    if (!chkProductExistInCart) {
      this.cartProducts.push({...product, quantity:1});
    } else {
      chkProductExistInCart.quantity = Number(chkProductExistInCart.quantity) + 1;
    }
    
  }

  remove(product: Product) {
    const index = this.cartProducts.indexOf(product, 0);
    if (index > -1) {
      this.cartProducts.splice(index, 1);
    }
  }

  empty() {
    this.cartProducts = [];
  } 
}
