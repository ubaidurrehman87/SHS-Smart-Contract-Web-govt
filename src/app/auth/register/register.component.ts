import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder ,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupApiService } from 'src/app/services/signUp/signup-api.service';
import { ToastrService } from 'ngx-toastr';

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
  error: boolean;

  constructor(
    private SignUpApi : SignupApiService, 
    private formBuilder : FormBuilder,
    private router : Router,
    private toast : ToastrService
    ) { }

  ngOnInit() {
    this.userData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      fullName: ['', Validators.required],
      cnic: ['', [Validators.required, Validators.minLength(14), Validators.pattern("^[0-9]*$")]],
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

        this.toast.success("Agent Created Successfully!")
        this.router.navigateByUrl('/login')
    }, err=> {
      this.loggingIn = false
      if(err.error.code == 11000){
        // this.duplicateEmail = true;
        this.toast.error("Email already exists!")
      }else if(err.error.code == 500){
        // this.error = true
        this.toast.error("Something went wrong!")
      }
    });
  }
}
