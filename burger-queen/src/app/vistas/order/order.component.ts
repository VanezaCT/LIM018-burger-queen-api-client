import { ProductsService } from 'src/app/servicios/api/products.service';
import { ListaDePedidosService } from './../../servicios/api/lista-de-pedidos.service';
import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  ProductsService: any;


  constructor(private listadePedidos: ListaDePedidosService) { }
  public listaPedidos: Array<any> = [];
  public subTotal: any = 0;
  public Asubtotal: Array<any> = []
  public totalPedidos: any = []




  ngOnInit(): void {

    this.listadePedidos.disparadorDePedidos.subscribe(data => {

      //console.log("reciebiendo data....",data);
      // this.listaPedidos.push(data)
      if (this.listaPedidos.some((elem) => elem.data.id == data.data.id)) {
        this.listaPedidos = this.listaPedidos.map((item) => {
          if (item.data.id == data.data.id) {
            item.cant += 1;
            // this.subTotal=item.cant*data.data.price;
            // console.log(this.subTotal)
            //this.Asubtotal.push(this.subTotal)
            return item;
          }
          return item;

        })
      } else {
        this.listaPedidos.push({ ...data, cant: 1 })
        // this.subTotal=data.data.price;

      }
      this.totalPedidos = this.listaPedidos
      console.log(this.totalPedidos)
    })

  }

delete(data:ProductsComponent){
  console.log("borrar este producto", data)
}

  }
