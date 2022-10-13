import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servicios/api/products.service';


@Component({
  selector: 'app-ordmesero',
  templateUrl: './ordmesero.component.html',
  styleUrls: ['./ordmesero.component.css']
})
export class OrdmeseroComponent implements OnInit {

  currentorder = [];
  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.myCurrentOrder$.subscribe(products =>{
      console.log(products)
    })
  }

}
