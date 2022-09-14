import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  title:string = '';
  quantity:number = 0;
  @Input() totalCount:number = 1;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.title = 'Shopping Cart';
  }

  onChange(quantity:string, product:any): void {

    if(Number(quantity) > product.quantity){
      product.quantity++; 
    } 
    if(Number(quantity) < product.quantity){
      product.quantity--; 
    } 

    if(Number(quantity) === 0){
      this.cartService.remove(product);
    }

    this.totalCount = 0;
    for (let cartProduct of this.cartService.cartProducts) {
      if(cartProduct.quantity){
        this.totalCount += cartProduct.quantity;
      }
    }
  }

}
