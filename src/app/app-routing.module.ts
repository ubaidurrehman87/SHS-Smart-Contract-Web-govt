import { AllOwnersComponent } from './Owner/all-owners/all-owners.component';
import { AddPropertyComponent } from './Properties/add-property/add-property.component';
import { LoginComponent } from './Authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonComponent} from './Components/button/button.component';
import {RegisterComponent} from './Authentication/register/register.component';
import {AllPropertiesComponent} from './Properties/all-properties/all-properties.component';



const routes: Routes = [
      {path : '' ,component :HomeComponent},
      {path : 'button' , component : ButtonComponent },
      {path : 'register' , component : RegisterComponent},
      {path : 'login' , component : LoginComponent},
      {path : 'add-Property', component : AddPropertyComponent},
      {path : 'all-Properties',component : AllPropertiesComponent},
      {path : 'all-owners', component : AllOwnersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
