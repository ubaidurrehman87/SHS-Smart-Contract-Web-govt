import { OwnerService } from './../../DataBase/Owner/owner.service';
import { Component, OnInit } from '@angular/core';
import {Owner} from '../../DataBase/Owner/owner.model';

@Component({
  selector: 'app-all-owners',
  templateUrl: './all-owners.component.html',
  styleUrls: ['./all-owners.component.sass']
})
export class AllOwnersComponent implements OnInit {

    
  constructor(private ownerService : OwnerService) {}

  ngOnInit() {
    this.refreshOwnerList();
  }
  refreshOwnerList(){
      this.ownerService.getOwnerList().subscribe((res)=>{
        this.ownerService.owners = res as Owner[];
      });
  }
  

}
