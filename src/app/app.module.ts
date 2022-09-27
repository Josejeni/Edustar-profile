import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { UserprofileComponent } from './view/userprofile/userprofile.component';
import { SchoolprofileComponent } from './view/schoolprofile/schoolprofile.component';
import { ForgotpasswordComponent } from './view/forgotpassword/forgotpassword.component';
import { HomeComponent } from './view/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
// import { MenuComponent } from './menu/menu.component';
import{MatToolbarModule}from '@angular/material/toolbar';
import{MatSidenavModule}from '@angular/material/sidenav';
import{MatIconModule}from '@angular/material/icon';
import{MatListModule}from '@angular/material/list';
import{MatButtonModule}from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserprofileComponent,
    SchoolprofileComponent,
    ForgotpasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
