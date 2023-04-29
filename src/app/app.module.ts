import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminNavbarComponent } from './Components/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AppointmentComponent,
    NavbarComponent,
    AdminComponent,
    AdminNavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
