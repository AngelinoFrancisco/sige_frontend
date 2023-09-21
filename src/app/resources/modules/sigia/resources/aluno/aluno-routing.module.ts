import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ListarComponent } from './listar/listar.component';
import { RegistrarOuEditarComponent } from './registrar-ou-editar/registrar-ou.editar.component';

const routes: Routes = [
  {
    path:'listagem',
    component:ListarComponent
  },
  {
    path:'registrar-ou-editar',
    component:RegistrarOuEditarComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ALUNORoutingModule { }
