import { Product } from './../../modelos/product.interface';
import { Component, OnInit } from '@angular/core';
import { ListaDePedidosService } from 'src/app/servicios/api/lista-de-pedidos.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private listadePedidos: ListaDePedidosService) { }
  public listaPedidos:Array<any>=[]

  ngOnInit(): void {
    this.listadePedidos.disparadorDePedidos.subscribe(data =>{
      console.log("reciebiendo data....",data);
      this.listaPedidos.push(data)
    })
  }


}
