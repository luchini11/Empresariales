import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './producto/listar/listar.component';
import { AddComponent } from './producto/add/add.component';
import { EditComponent } from './producto/edit/edit.component';
import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/service/service.service';
import{ServiceUService}from'../app/service/service-u.service'
import{HttpClientModule}from'@angular/common/http';
import { ListarPersonaComponent } from './Persona/listar-persona/listar-persona.component';
import { AddPersonaComponent } from './Persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './Persona/edit-persona/edit-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarPersonaComponent,
    AddPersonaComponent,
    EditPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService, ServiceUService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
