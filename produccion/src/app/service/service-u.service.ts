import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceUService {


  constructor(private http:HttpClient) { }

  readonly Url='http://localhost:8080/tiendaTolimita/demo/persona';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }

  getPersonasId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }
}
