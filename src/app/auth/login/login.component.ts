import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder ,FormGroup } from '@angular/forms';
import { AuthApiService } from 'src/app/services/auth/auth-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userform : any;
  notRegistered : boolean = false;
  incorrect : boolean = false;
  loggingIn : boolean = false;
  token : String;
  userData : FormGroup;
  submitted : boolean = false;



  constructor(
    private formBuilder : FormBuilder, 
    private AuthApi : AuthApiService,
    private router : Router,
    private toast : ToastrService
    ) { 
    this.token = localStorage.getItem('token');
   }

  ngOnInit() {
    this.userData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
    if(this.token){
      this.router.navigate(['/all-Properties']);
    }
  }
  get f() { return this.userData.controls; }

  login(){
    this.submitted = true;
    this.loggingIn = true;
    if (this.userData.invalid) {
      this.loggingIn = false;
        return;
    }
    this.AuthApi.AuthenticateAgent(this.userData.value).subscribe((data : any) =>{
      if(data.message == "Email or Password is incorrect"){
        this.loggingIn = false;
        this.toast.error("Email or Password is incorrect")
      }
      else if(data.message == "NOT Registered"){
        this.loggingIn = false;
        this.toast.warning("You are not Registered!. Sign Up and Create a new Account!")
      }
      else{
        localStorage.setItem('token', data.token)
        localStorage.setItem('name', data.name)
        localStorage.setItem('email', data.email)
        location.reload();
      }
      
    }, err => {
      console.log(err)
      this.loggingIn = false
    });
  }

}
