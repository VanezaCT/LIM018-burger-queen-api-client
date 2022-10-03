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
productos:any = productsSnk.desayuno
productosAlmuerzo:any=productsSnk.almuerzo_cena

  ngOnInit(): void {
  }

}
