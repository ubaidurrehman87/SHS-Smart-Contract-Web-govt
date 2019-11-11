import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../DataBase/property.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.sass'],
  providers: [PropertyService]
})
export class AddPropertyComponent implements OnInit {
  propertyform : any;
  constructor(private propertyService: PropertyService) { }

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
    this.propertyService.postProperty(this.propertyform).subscribe((res)=>{
      console.log("Added Successfully");

    })
  }
}
