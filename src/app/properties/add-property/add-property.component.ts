import { Component, OnInit } from '@angular/core';
import { PropertyApiService } from '../../services/property/property-api.service';
import { Validators, FormBuilder ,FormGroup } from '@angular/forms';
import { OwnerApiService } from 'src/app/services/owner/onwer-api.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  propertyform : any;
  ownerform :any;
  propertyData : FormGroup;
  submitted : boolean = false;
  CNIC_Regex = '[0-9]{5}-[0-9]{7}-[0-9]{1}';
  constructor(private PropertyApiService : PropertyApiService,private formBuilder : FormBuilder,private OwnerApiService : OwnerApiService) { }

  
  ngOnInit() {
    this.propertyData = this.formBuilder.group({
      state : ['',Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cnic : ['', Validators.required],
      location : ['', Validators.required],
      city : ['', Validators.required],
      rooms : ['',Validators.required],
      floors : ['', Validators.required],
      area : ['', Validators.required],
      district : ['', Validators.required],
      PostalCode : ['', Validators.required],
      houseNumber : ['', Validators.required]
      // ,
  });
  }
  get f() { return this.propertyData.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.propertyData.invalid) {
            return;
        }
        

        //On Successful Property Addition along with the Owner
        swal({
          title: "Are you sure?",
          text: "You want to Add this property Along with the Specified Owner <b>"+ this.propertyData.value.firstName + " " + this.propertyData.value.lastName +  "</b>!",
          icon: "warning",
          dangerMode: true,
        })
        .then((Sure) => {

          if (Sure) { 
            //Form Data Inertion
            
              this.ownerform={
                firstname : this.propertyData.value.firstName,
                lastname : this.propertyData.value.lastName,
                email : this.propertyData.value.email,
                cnic : this.propertyData.value.cnic,
              }
              this.OwnerApiService.postOwner(this.ownerform).subscribe((res: any)=>{
                if(res.code == 11000){
                  swal({
                    title: "Sorry!",
                    text: "Email Already Exists!",
                    icon: "warning",
                  });
                }
                else{
                  this.propertyform = {
                    location : this.propertyData.value.location,
                    state : this.propertyData.value.state,
                    city : this.propertyData.value.city,
                    district : this.propertyData.value.district,
                    postalcode : this.propertyData.value.PostalCode,
                    house : this.propertyData.value.houseNumber,
                    area : this.propertyData.value.area,
                    rooms : this.propertyData.value.rooms,
                    floors : this.propertyData.value.floors
                  }
                  this.PropertyApiService.postProperty(this.propertyform).subscribe((res)=>{
                    swal("Property Added Along with the Owner!", {
                      icon: "success",
                    });
                    this.onReset();
                  });
                }
              });
              
          }
        });
    }

    onReset() {
        this.submitted = false;
        this.propertyData.reset();
    }
}
