import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosEnviadosService } from 'src/app/servicios/api/pedidos-enviados.service';
import { Product } from 'src/app/modelos/product.interface';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  @Input() order: any={
    "userId": "",
    "client":"" ,
    "products": [],
    "status": "",
    "dateEntry": ""
  }
  @Input() product: any={
    id: "",
    name: "",
    image: "",
    price: 0,
    type: "",
    dateEntry: ""
  }

  constructor(
    
  ) { }

  ngOnInit(): void {
    


}

}
