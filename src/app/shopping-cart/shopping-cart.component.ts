import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  title:string = 'Shopping Cart';
  quantity:number = 0;

  @Input() totalCount:number = 1;
  @Input() totalPrice:number = 0;

  cartEmpty:string = "Shopping cart is empty!";

  constructor(public cartService: CartService) { }

  ngOnInit(): void {}

  onChange(quantity:string, product:any): void {
    this.cartService.update(Number(quantity), product);

    this.cartService.remove(Number(quantity), product);

    this.totalCount = this.cartService.getTotalCount();
    this.totalPrice = this.cartService.getTotalPrice();
  }

}
