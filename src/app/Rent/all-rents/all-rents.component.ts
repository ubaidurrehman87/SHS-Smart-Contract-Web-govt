import { Rent } from './../../DataBase/Rent/rent.model';
import { Property } from './../../DataBase/property.model';
import { Component, OnInit } from '@angular/core';
import {RentService} from '../../DataBase/Rent/rent.service';


@Component({
  selector: 'app-all-rents',
  templateUrl: './all-rents.component.html',
  styleUrls: ['./all-rents.component.sass'],
  providers : [RentService]
})
export class AllRentsComponent implements OnInit {
  allRents : Rent[];
  constructor(private rentService: RentService) { }

  ngOnInit() {
    this.refreshRentList();
  }
  refreshRentList(){
      this.rentService.getRent().subscribe((res)=>{
          this.rentService.rents= res as Rent[];
      });
  }

}
