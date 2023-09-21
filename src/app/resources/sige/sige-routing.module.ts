import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigeComponent } from './sige.component';

const routes: Routes = [
  {
    path:'',
    component:SigeComponent
  },
  {
    path: 'sigia',
    loadChildren: () =>
      import('../modules/sigia/sigia.module')
        .then((m) => m.SIGIAModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SIGERoutingModule { }
