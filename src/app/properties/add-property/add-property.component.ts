import { Component, OnInit } from '@angular/core';
import { PropertyApiService } from '../../services/property/property-api.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { OwnerApiService } from 'src/app/services/owner/onwer-api.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Property } from 'src/app/models/property/property.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  propertyData: FormGroup;
  searchOwner : FormGroup;
  submitted: boolean = false;
  CNIC_Regex = '[0-9]{5}-[0-9]{7}-[0-9]{1}';
  submitted_owner: boolean;
  user: string;
  isLoadingOne: boolean;
  constructor(
    private PropertyApiService: PropertyApiService, 
    private formBuilder: FormBuilder, 
    private OwnerApiService: OwnerApiService,
    private toast : ToastrService,
    private router : Router
    ) {
      this.user = JSON.stringify(localStorage.getItem('email'))
     }


  ngOnInit() {
    this.propertyData = this.formBuilder.group({
      location : ["", Validators.required],
      city : ["", Validators.required],
      type : ["", Validators.required],
      postalCode : ["", [Validators.required,Validators.pattern("^[0-9]*$")]],
      district : ["", Validators.required],
      houseNumber : ["", [Validators.required,Validators.pattern("^[0-9]*$")]],
      area : ["", [Validators.required,Validators.pattern("^[0-9]*$")]],
      rooms : ["", [Validators.required,Validators.pattern("^[0-9]*$")]],
      floors : ["", [Validators.required,Validators.pattern("^[0-9]*$")]],
    })

    this.searchOwner = this.formBuilder.group({
      ownerEmail : ["", [Validators.required,Validators.email]]
    })
  }
  get f() { return this.propertyData.controls; }

  get g() { return this.searchOwner.controls; }

  searchOwnerFunct(){
    this.submitted_owner = true
    if (this.searchOwner.invalid) {
      return;
    }
    this.PropertyApiService.getOwnerByEmail(this.searchOwner.value.ownerEmail).subscribe((res : any)=>{
      if(res.status){
        this.toast.success("Owner with this email found!")
      }
    }, err=>{
      if(err.status == 404){
        this.toast.warning("No owner with this email found!")
      }
      console.log(err)
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.propertyData.invalid) {
      return;
    }
    if(!this.searchOwner.value.ownerEmail){
      this.toast.error("Owner Not Selected!")
      return
    }
    this.loadOne()
    let property : any 
    property = {
      location : this.propertyData.value.location,
      city : this.propertyData.value.city,
      type : this.propertyData.value.type,
      postalCode : this.propertyData.value.postalCode,
      district : this.propertyData.value.district,
      houseNumber : this.propertyData.value.houseNumber,
      area : this.propertyData.value.area,
      rooms : this.propertyData.value.rooms,
      floors : this.propertyData.value.floors,
      approveStatus : "approved",
      user : this.searchOwner.value.ownerEmail
    }    
    this.PropertyApiService.postProperty(property).subscribe((res : any)=> {
      this.isLoadingOne = false
      this.toast.success("Property Added Successfully. Please Wait for the Approval from govt authorities!")
      this.router.navigateByUrl("/all-Properties")
    }, (err : HttpErrorResponse) => {
      this.isLoadingOne = false
      if(err.error.code == 11000){
        this.toast.error("This house Number is already in Listing!")
      }
      else{
        this.toast.error("Unable to add property. Something went wrong!")
      }
      console.log(err)
    })
  }

  loadOne(): void {
    this.isLoadingOne = true;
  }

  onReset() {
    this.submitted = false;
    this.propertyData.reset();
  }
}
