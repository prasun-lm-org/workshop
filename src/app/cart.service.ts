import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Product[] = [];
  totalCount:number = 0;
  totalPrice:number = 0;

  constructor() { }

  add(product: Product) {
    const chkProductExistInCart = this.cartProducts.find(({id}) => id === product.id); // find product by id
    if (!chkProductExistInCart) {
      this.cartProducts.push({...product, quantity:1});
    } else {
      chkProductExistInCart.quantity = Number(chkProductExistInCart.quantity) + 1;
    }
  }

  update(quantity:number, product: Product) {
    if(product.quantity){
      if(quantity > product.quantity){
        product.quantity++; 
      } 
      if(quantity < product.quantity){
        product.quantity--; 
      } 
    }
  }

  removeProduct(product: Product) {
    product.quantity = Number(product.quantity) - 1;
    this.remove(product.quantity, product);
  }

  remove(quantity:number, product: Product) {
    if(quantity === 0) {
      const index = this.cartProducts.indexOf(product, 0);
      if (index > -1) {
        this.cartProducts.splice(index, 1);
      }
    }
  }

  empty() {
    this.cartProducts = [];
  } 

  getTotalCount() : number{
    this.totalCount = 0;
    for (let cartProduct of this.cartProducts) {
      if(cartProduct.quantity){
        this.totalCount += cartProduct.quantity;
      }
    }
    return this.totalCount;
  }

  getTotalPrice() : number{
    this.totalPrice = 0;
    for (let cartProduct of this.cartProducts) {
      if(cartProduct.quantity){
        this.totalPrice += cartProduct.quantity*cartProduct.price;
      }
    }
    return this.totalPrice;
  }
}
