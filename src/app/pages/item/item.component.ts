import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productodescripcion } from '../../interfaces/producto.descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


producto :productodescripcion;
id : string;

  constructor(private route: ActivatedRoute,
              public productoservice : ProductosService) { }

  ngOnInit(): void {



this.route.params

.subscribe(parametros => 
  {
    //console.log(parametros['id']);
    this.productoservice.getproducto(parametros['id'])
    .subscribe( (producto: productodescripcion) =>
{
  this.id = parametros['id'];
  this.producto = producto;
//console.log(producto);



}

    );
  }
  );


  }

}
