import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './Components/button/button.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './Components/card/card.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { AddPropertyComponent } from './Properties/add-property/add-property.component';
import { AllPropertiesComponent } from './Properties/all-properties/all-properties.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    CardComponent,
    RegisterComponent,
    LoginComponent,
    AddPropertyComponent,
    AllPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
