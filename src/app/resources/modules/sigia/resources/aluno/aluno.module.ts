import { NgModule } from '@angular/core'; 
import { ALUNORoutingModule } from './aluno-routing.module';  
import { ListarComponent } from './listar/listar.component';
import { RegistrarOuEditarComponent } from './registrar-ou-editar/registrar-ou.editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ListarComponent, RegistrarOuEditarComponent],
  imports: [ ALUNORoutingModule, FormsModule, ReactiveFormsModule]
})
export class ALUNOModule { }
