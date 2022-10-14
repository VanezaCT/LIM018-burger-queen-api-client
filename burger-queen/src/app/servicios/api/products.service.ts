import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/modelos/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private myOrder: Product[] = [];

 
  

  

  constructor() { }

  addProduct(product: Product){
    this.myOrder.push(product);
  }

  getOrder(){
    return this.myOrder
  }
}
