import { Component, OnInit, Input } from '@angular/core';
//import productsSnk from "src/assets/data/appiBurguer.json";
import { HttpClient } from '@angular/common/http'; 
import { Product } from 'src/app/modelos/product.interface';
import { ProductsService } from 'src/app/servicios/api/products.service';
import { PedidoService } from 'src/app/servicios/api/pedido.service';
import { ListaDePedidosService } from 'src/app/servicios/api/lista-de-pedidos.service';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {

  myOrder: Product[] = [];
  
  
  products: Product[] =[];
  

  constructor(
    private productsService: ProductsService, 
    private pedidoService: PedidoService,
    private listadePedidos: ListaDePedidosService
    ) {
    this.myOrder = this.productsService.getOrder();
}

/*productosAlmuerzo:any=productsSnk.products.almuerzo_cena

orden:any[]=[productsSnk.products.desayuno]
pedidoproducto:any={}

capturar(){
  this.orden.push(this.pedidoproducto)
  console.log(this.orden);
  
}*/

 ngOnInit(): void {

  this.pedidoService.getAllProducts()
  .subscribe(data => {
    this.products=data;
  });
  }
  
  onAddtoShopping(product: Product){
    this.productsService.addProduct(product)
    // console.log(product)
    this.listadePedidos.disparadorDePedidos.emit({
      data:product
    })
  }

}

