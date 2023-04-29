import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AppointmentComponent } from './Components/appointment/appointment.component'
import { NavbarComponent } from './Components/navbar/navbar.component'
import { SignupComponent } from './Components/signup/signup.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminNavbarComponent } from './Components/admin-navbar/admin-navbar.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:AdminComponent},
  {path:'appointment', component:AppointmentComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'admin-navbar', component:AdminNavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
