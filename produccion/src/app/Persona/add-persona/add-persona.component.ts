import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUService } from 'src/app/service/service-u.service';
import{Persona}from 'src/app/Modelo/Persona'

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  persona:Persona=new Persona();
  constructor(private router:Router, private serviceU:ServiceUService) { }

  ngOnInit(): void {
  }

  GuardarU(){
    this.serviceU.createPersona(this.persona)
    .subscribe(data=>{
      alert("se agrego correctamente");
      this.router.navigate(["listarU"]);
    })
  }

}
