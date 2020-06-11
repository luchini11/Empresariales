import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './producto/listar/listar.component';
import { AddComponent } from './producto/add/add.component';
import { EditComponent } from './producto/edit/edit.component';
import { ListarPersonaComponent } from './Persona/listar-persona/listar-persona.component';
import { AddPersonaComponent } from './Persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './Persona/edit-persona/edit-persona.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'edit',component:EditComponent},
  {path:'listarU',component:ListarPersonaComponent},
  {path:'addU',component:AddPersonaComponent},
  {path:'editU',component:EditPersonaComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
