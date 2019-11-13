import { Component, OnInit } from '@angular/core';
import { PropertyApiService } from '../../services/property/property-api.service';
import { NgForm } from '@angular/forms';
import { OwnerApiService } from 'src/app/services/owner/onwer-api.service';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
  providers: [PropertyApiService]
})
export class AddPropertyComponent implements OnInit {
  propertyform : any;
  ownerform :any;
  constructor(private PropertyApiService : PropertyApiService,private OwnerApiService : OwnerApiService) { }

  ngOnInit() {
    
  }
  onSubmit(form : NgForm){
    console.log(form);
    this.propertyform = {
    location : form.value.location,
    state : form.value.state,
    city : form.value.city,
    district : form.value.district,
    postalcode : form.value.postalcode,
    house : form.value.house,
    area : form.value.area,
    rooms : form.value.rooms,
    floors : form.value.floors
    }
    console.log("Im here");
    this.PropertyApiService.postProperty(this.propertyform).subscribe((res)=>{
      console.log("Added Successfully");
    });

    this.ownerform={
      firstname : form.value.firstname,
      lastname : form.value.lastname,
      email : form.value.email,
      cnic : form.value.cnic,
    }
    this.OwnerApiService.postOwner(this.ownerform).subscribe((res)=>{
      console.log("Owner Added Succfully");
    });
  }
}
