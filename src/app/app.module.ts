import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HomeComponent } from './home/home.component';
import { AllPropertiesComponent } from './properties/all-properties/all-properties.component';
import { AddPropertyComponent } from './properties/add-property/add-property.component';
import { AllOwnersComponent } from './owner/all-owners/all-owners.component';
import { EditOwnerComponent } from './owner/edit-owner/edit-owner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
// import { ApprovalComponent } from './models/approval/approval/approval.component';
import { ToastrModule } from 'ngx-toastr';
import { ApprovalPropertiesComponent } from './approval-properties/approval-properties.component';
import { DisapproveListingComponent } from './properties/disapprove-listing/disapprove-listing.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllPropertiesComponent,
    AddPropertyComponent,
    AllOwnersComponent,
    EditOwnerComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ApprovalPropertiesComponent,
    DisapproveListingComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
