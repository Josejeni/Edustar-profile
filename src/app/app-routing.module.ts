import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './view/forgotpassword/forgotpassword.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { SchoolprofileComponent } from './view/schoolprofile/schoolprofile.component';
import { UserprofileComponent } from './view/userprofile/userprofile.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"home",component:HomeComponent,
  children:[
    {path:"userprofile",component:UserprofileComponent},
    {path:"schoolprofile",component:SchoolprofileComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
