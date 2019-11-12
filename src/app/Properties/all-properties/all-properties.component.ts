import { PropertyService } from './../../DataBase/property.service';
import { Property } from './../../DataBase/property.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-properties',
  templateUrl: './all-properties.component.html',
  styleUrls: ['./all-properties.component.sass'],
  providers : [PropertyService]
})
export class AllPropertiesComponent implements OnInit {

  constructor(private propertyService : PropertyService) { }

  ngOnInit() {
    this.refreshPropertList();
  }
  refreshPropertList(){
    this.propertyService.getProperty().subscribe((res)=>{
      this.propertyService.properties = res as Property[];
    })
  }

}
