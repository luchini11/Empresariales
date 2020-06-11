import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import{ServiceService} from '../../service/service.service'
import{Producto}from 'src/app/Modelo/Producto'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  producto:Producto[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {

    this.service.getProductos()
    .subscribe(data=>{
      this.producto=data;
    })
  }
  Editar(producto:Producto):void{
    localStorage.setItem("id",producto.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(producto:Producto){
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      this.producto=this.producto.filter(p=>p!==producto);
      alert("producto eliminado");
    })
  }

}
