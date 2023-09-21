import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './resources/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch:'full'
  },
 {
  path:'',
  component:LayoutComponent,
  children:[
    {
      path:'dashboard',
      component:DashboardComponent,
      data:{
        breadcrumb:'Main page for the module'
      }
    },
    {
      path: 'aluno',
      loadChildren:
        () => import('./resources/aluno/aluno.module')
          .then((m) => m.ALUNOModule)
    }
  ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SIGIARoutingModule { }
