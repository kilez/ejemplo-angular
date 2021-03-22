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
producosfiltrada:Producto[]=[];

private cargarprodudtos()
{

return new Promise<void> ( (resolve, reject) =>  
{

  this.http.get('https://angular-html-13676-default-rtdb.firebaseio.com/productos_idx.json')
  .subscribe( (resp : Producto []) =>
  {
  //console.log(resp);
  this.productos = resp;
  this.cargando= false;
  resolve();
  }
  );

}

);

}

getproducto(id: string)
{

return this.http.get(`https://angular-html-13676-default-rtdb.firebaseio.com/productos/${id}.json`);

}

buscarPRoducto(termino : string)
{

if(termino.length===0)
{
  //cargar productos
  this.cargarprodudtos().then(()=>{
  this.filtrarProductos(termino);
  });
}
else
{
  //aplicar filtro
  this.filtrarProductos(termino);
}

 

}

filtrarProductos(termino : string)
{

console.log(this.productos);
this.producosfiltrada=[]; 

termino = termino.toLocaleLowerCase();

this.productos.forEach( prod =>
{
  const titulolower=prod.titulo.toLocaleLowerCase();

if(prod.categoria.indexOf(termino)>=0 || titulolower.indexOf(termino)>=0)
{
  this.producosfiltrada.push(prod);
}

}

);

}


}
