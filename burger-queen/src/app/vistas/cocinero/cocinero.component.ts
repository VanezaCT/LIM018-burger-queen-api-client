import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/servicios/api/pedido.service';
import { Product } from 'src/app/modelos/product.interface';

@Component({
  selector: 'app-cocinero',
  templateUrl: './cocinero.component.html',
  styleUrls: ['./cocinero.component.css']
})
export class CocineroComponent implements OnInit {

  product: any = {
    id: "",
    name: "",
    image: "",
    price: 0,
    type: "",
    dateEntry: ""
  }
  products: any = [{}]



  order: any = {
    "_id": "",
    "userId": "",
    "client": "",
    "products": [],
    "status": "",
    "dateEntry": ""
  }
  orders: any = [{}];
  listaproductos: any = [];
  ind: any;
  iind: any;




  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getallOrder().subscribe((data) => {
      this.orders = data;
      console.log(this.orders)
      // this.ind=this.orders.map((x:any)=>{return x.products})
      //console.log(this.ind)
      // console.log(this.products)
    })

    // this.pedidoService.getAllProducts().subscribe((dta) => {
    //   this.products = dta;
    //   this.iind = this.products.map((y: any) => { return y.name })
    //   //console.log(this.iind,this.ind)


      // this.newp=this.ind.map(function(subobj:any) {
      //   return subobj.map(function(d:any) {
      //     return d.productId

      //   })
      // })

      // if(this.orders.some((elem:any) => elem.products.productId == this.products.id)){
      //   this.orders.products.map((m:any) =>{
      //     return m.products.map((x:any)=>{
      //       x.detalle=this.products[(x.productId-1)];

      //       return x;
      //     })
      //   })
      // }

      // for (let i = 0; i < this.orders.length; i++) {
      //   if (this.orders[i].products) {
      //     this.orders[i].products.map((x: any) => {
      //       x.detalle = this.iind[(x.productId - 1)];
      //       return x

      //     })
      //   }


      // }

      //console.log(this.newp)
      // for (let i = 0; i < this.newp.length; i++) {
      //   for (let j = 0; j < this.newp[i].length; j++) {
      //    const a =this.newp[i][j];
      //     this.newp2.push(a)
      //   }

      // }
      //console.log(this.newp2);
      // this.papu=this.newp2.map((s:any)=>{
      //   const obj:any={};
      //   obj.detalle=this.iind[parseInt(s)-1];
      //   return obj;
      // })

      //this.nwpapu=this.papu.map((o:any)=>{return o.detalle});

      // this.orders.map((s:any)=>{
      //   const obj:any={};
      //   obj.detalle=this.iind[parseInt(s)-1];
      //   return this.orders[obj];
      // })
      







    //})












  }

  deleteOrd(id:any){
    console.log(id)
    this.pedidoService.deleteOrder(id).subscribe((data)=> console.log("borrado") )

    const indexbyId=this.orders.findIndex((x:any) => id === x._id);
    this.orders.splice(indexbyId,1);
    console.log(this.orders)

  }

}
