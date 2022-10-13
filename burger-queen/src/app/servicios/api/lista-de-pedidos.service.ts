import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDePedidosService {
@Output() disparadorDePedidos:EventEmitter<any>=new EventEmitter()
  constructor() { }
}
