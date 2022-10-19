import { ProductsService } from 'src/app/servicios/api/products.service';
import { ListaDePedidosService } from './../../servicios/api/lista-de-pedidos.service';
import { Component, OnInit, Input} from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  ProductsService: any;

  @Input() formCli: any={};


  constructor(private listadePedidos: ListaDePedidosService) { }
  public listaPedidos: Array<any> = [];
  public arrsubTotal:any=[];
  public total: any=0;




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
      }else{
        this.listaPedidos.push({...data, cant: 1})
        this.subTotal=data.data.price;
        console.log(this.subTotal);


      }



    })

  }
  subTotal(subTotal: any) {
    throw new Error('Method not implemented.');
  }

delete(){
  console.log("borrar este producto")
}

  }
