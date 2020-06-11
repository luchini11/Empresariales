import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import{ Producto }from 'src/app/Modelo/Producto'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  producto :Producto=new Producto();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getProductosId(+id)
    .subscribe(data=>{
      this.producto=data;
    })
  }
  Actualizar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Se actualizo correctamente");
      this.router.navigate(["listar"])
    })

  }

}
