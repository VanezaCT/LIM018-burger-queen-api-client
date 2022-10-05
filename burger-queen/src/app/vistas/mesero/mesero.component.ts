import { Component, OnInit } from '@angular/core';
import productsSnk from "src/assets/data/appiBurguer.json";

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {

  constructor() {
    
}
productos:any = productsSnk.products.desayuno

productosAlmuerzo:any=productsSnk.products.almuerzo_cena

orden:any[]=[productsSnk.products.desayuno]
pedidoproducto:any={}

capturar(){
  this.orden.push(this.pedidoproducto)
  console.log(this.orden);
  
}

 ngOnInit(): void {
  }

}

