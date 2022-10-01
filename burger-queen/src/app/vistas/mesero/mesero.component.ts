import { Component, OnInit } from '@angular/core';
//import productsSnk from "src/assets/data/appiBurguer.json";
import { HttpClient } from '@angular/common/http'; 
import * as data from '../../../assets/data/appiBurguer.json';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {
  public contentfile: string ="";

  constructor(private httpClient: HttpClient) {
    
}
//productos:any = productsSnk.products

  ngOnInit(): void {
  }
  public mostrarJson(): void{
    this.httpClient.get("assets/data/appiBurguer.json").subscribe(data => {
      console.log(data);
    })
  }

}
