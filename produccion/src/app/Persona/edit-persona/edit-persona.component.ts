import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUService } from 'src/app/service/service-u.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  persona :Persona=new Persona();
  constructor(private router:Router,private serviceU:ServiceUService) { }

  ngOnInit(): void {
    this.EditarU();
  }
  EditarU(){
    let id=localStorage.getItem("id");
    this.serviceU.getPersonasId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }
  ActualizarU(persona:Persona){
    this.serviceU.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("se actualizo correctamente");
      this.router.navigate(["listarU"]);
    })
  }

}
