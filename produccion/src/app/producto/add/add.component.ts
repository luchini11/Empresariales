import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  producto:Producto=new Producto();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  Guardar(){
    this.service.createProducto(this.producto)
    .subscribe(data=>{
      alert("se agrego correctamente");
      this.router.navigate(["listar"]);
    })
  }

}
