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
  public listaPedidos:Array< any>=[];
  public arrayPedidos: Array<any>=[]

  ngOnInit(): void {
    this.listadePedidos.disparadorDePedidos.subscribe(data =>{
      console.log("reciebiendo data....",data)

      //if(this.listaPedidos.indexOf(data) ==-1){
      this.listaPedidos.push(data)

      //}
      //else if(this.listaPedidos.indexOf(data )){
      //  return console.log("se repite");
      //}
    //  this.listaPedidos.some((elem) =>console.log(elem));
     console.log(this.listaPedidos);
      
    //  if(this.listaPedidos.some((elem) => elem.data.name == data.name)){

    //    this.listaPedidos=this.listaPedidos.map((item) =>{
    //      if(item.name == data.name){
    //        item.cant+=1;
    //        return item;
    //      }
    //     return item;

    //    })
    //  }else{
    //    this.listaPedidos.push({...data, cant: 1})


    //  }
    //  console.log(this.listaPedidos, "holu");
     
     
    })
  }


}
