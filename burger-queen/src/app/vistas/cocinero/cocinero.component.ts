import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/modelos/order.interface';
import { PedidoService } from 'src/app/servicios/api/pedido.service';
import { Product } from 'src/app/modelos/product.interface';

@Component({
  selector: 'app-cocinero',
  templateUrl: './cocinero.component.html',
  styleUrls: ['./cocinero.component.css']
})
export class CocineroComponent implements OnInit {

  

  product: any={
    id: "",
    name: "",
    image: "",
    price: 0,
    type: "",
    dateEntry: ""
  }
  products: any = [{}]


  
   order: any={
    "userId": "",
    "client":"" ,
    "products": [],
    "status": "",
    "dateEntry": ""
  }
   orders: any=[{}];
   listaproductos: any=[];
   ind: any;
   iind:any;

  

  constructor(private pedidoService:PedidoService ) { }

  ngOnInit(): void {
    this.pedidoService.getallOrder().subscribe((data) =>{ 
      this.orders=data;
      console.log(this.orders)
      this.ind=this.orders.map((x:any)=>{return x.products})
      console.log(this.ind)
      

      })
   
    this.pedidoService.getAllProducts().subscribe((dta) =>{
      this.products=dta;
      this.iind=this.products.map((y:any)=>{return y.name})
      console.log(this.iind,this.ind)
      
      
      
      
    })
    

   
   

    
    

    

    

  }
 
}
