import { Component, OnInit, Input } from '@angular/core';
//import productsSnk from "src/assets/data/appiBurguer.json";
//import { HttpClient } from '@angular/common/http'; 
//import * as data from '../../../assets/data/appiBurguer.json';
//import productsSnk from "src/assets/data/appiBurguer.json";



@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {
  
  
  public datajson: any =[];
  @Input() dataEntrante:any;
  

  constructor() {
    
}

//productos:any = productsSnk.products.desayuno
//productosAlmuerzo:any=productsSnk.products.almuerzo_cena


  ngOnInit(): void {
  }
  // public mostrarJson(): void{
  //   this.httpClient.get("assets/data/appiBurguer.json").subscribe(resp => {
  //     console.log(resp);
  //     this.datajson=resp;
      
      
      

  //   })
  // }

}
