import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http : HttpClient) { 

     this.cargarprodudtos();
  }

cargando = true;
productos:Producto[] =[];

private cargarprodudtos()
{
this.http.get('https://angular-html-13676-default-rtdb.firebaseio.com/productos_idx.json')
.subscribe( (resp : Producto []) =>
{
console.log(resp);
this.productos = resp;
this.cargando= false;


}

);
}

}
