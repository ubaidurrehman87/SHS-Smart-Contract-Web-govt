import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllPropertiesComponent } from './properties/all-properties/all-properties.component';
import { AddPropertyComponent } from './properties/add-property/add-property.component';
import { AllOwnersComponent } from './owner/all-owners/all-owners.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/_guard/auth.guard';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  {path : 'add-Property', component : AddPropertyComponent ,pathMatch : 'full', canActivate : [AuthGuard]},
  {path : 'all-Properties',component : AllPropertiesComponent , pathMatch : 'full', canActivate : [AuthGuard]},
  {path : 'all-owners', component : AllOwnersComponent, canActivate : [AuthGuard]},
  {path : 'login', component : LoginComponent },
  {path : 'register', component : RegisterComponent },
  {path : '' , component: HomeComponent , pathMatch : 'full', canActivate : [AuthGuard]},
  {path : '**' , component : PagenotfoundComponent , canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
