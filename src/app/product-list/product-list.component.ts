import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:string = 'Product List';
  products: Product[] = [];
  totalCount:number = 0;
  totalPrice:number = 0;

  @Output() totalCountEvent = new EventEmitter<number>();
  @Output() totalPriceEvent = new EventEmitter<number>();

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  onClick(product: Product): void {
    this.cartService.add(product);

    this.totalCount = this.cartService.getTotalCount();
    this.totalPrice = this.cartService.getTotalPrice();
    
    this.totalCountEvent.emit(this.totalCount);
    this.totalPriceEvent.emit(this.totalPrice);
  }
}
