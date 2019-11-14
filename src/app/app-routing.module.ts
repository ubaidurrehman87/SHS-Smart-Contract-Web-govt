import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllPropertiesComponent } from './properties/all-properties/all-properties.component';
import { AddPropertyComponent } from './properties/add-property/add-property.component';
import { AllOwnersComponent } from './owner/all-owners/all-owners.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {path : 'add-Property', component : AddPropertyComponent ,pathMatch : 'full'},
  {path : 'all-Properties',component : AllPropertiesComponent , pathMatch : 'full'},
  {path : 'all-owners', component : AllOwnersComponent},
  {path : 'login', component : LoginComponent },
  {path : '' , component: HomeComponent , pathMatch : 'full'},
  {path : '**' , component : PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
