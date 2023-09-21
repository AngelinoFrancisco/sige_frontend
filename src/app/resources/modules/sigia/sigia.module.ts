import { NgModule } from '@angular/core';
import { SIGIARoutingModule } from './sigia-routing.module';
import { DashboardComponent } from './resources/dashboard/dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    LayoutComponent,
    SidebarComponent
  ],
  imports: [SIGIARoutingModule]
})
export class SIGIAModule { }
