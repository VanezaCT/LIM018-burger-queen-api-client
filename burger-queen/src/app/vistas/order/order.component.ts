import { Product } from './../../modelos/product.interface';
import { ListaDePedidosService } from './../../servicios/api/lista-de-pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  constructor(private listadePedidos: ListaDePedidosService) { }
  public listaPedidos:Array<any>=[]

  delete(): void{
    console.log("borrado");
  
  }

  ngOnInit(): void {
    this.listadePedidos.disparadorDePedidos.subscribe(data =>{
      console.log("reciebiendo data....",data);
     // this.listaPedidos.push(data)
      if(this.listaPedidos.some((elem) => elem.data.id == data.data.id)){
        this.listaPedidos=this.listaPedidos.map((item) =>{
          if(item.data.id == data.data.id){
            item.cant+=1;
            return item;
          }
          return item;

        })
      }else{
        this.listaPedidos.push({...data, cant: 1})


      }

    })
    
  }


  
}
