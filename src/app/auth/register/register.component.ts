import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder ,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupApiService } from 'src/app/services/signUp/signup-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  userform : any;
  duplicateEmail : boolean = false;
  loggingIn : boolean = false;
  userData : FormGroup;
  submitted : boolean = false;

  constructor(private SignUpApi : SignupApiService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.userData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      cnic: ['', Validators.required],
      position: ['', Validators.required],
      departmentName: ['', Validators.required],
      JobDescription: ['', Validators.required]
    });
  }

  get f() { return this.userData.controls; }

  signUp(){
    this.submitted = true;
    this.loggingIn = true;
    if (this.userData.invalid) {
      this.loggingIn = false;
        return;
    }
    this.SignUpApi.AddAgent(this.userData.value).subscribe((data : any) =>{
      this.loggingIn = false;
      if(data.code == 11000){
        this.duplicateEmail = true;
      }
    });
  }
}
