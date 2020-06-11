import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceUService}from '../../service/service-u.service'
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {

  personas:Persona[];
  constructor(private serviceU:ServiceUService, private router:Router) { }

  ngOnInit(): void {
    this.serviceU.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }
  EditarU(persona:Persona){
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["editU"]);
  }

  DeleteU(persona:Persona){
    this.serviceU.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!=persona);
      alert("usuario eliminado");
    })
  }

}
