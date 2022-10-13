import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/modelos/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private myOrder: Product[] = [];
  private myCurrentOrder = new BehaviorSubject<Product[]>([]);

  myCurrentOrder$ = this.myCurrentOrder.asObservable();

  constructor() { }

  addProduct(product: Product){
    this.myOrder.push(product);
    this.myCurrentOrder.next(this.myOrder);
  }

  getOrder(){
    return this.myOrder
  }
}
