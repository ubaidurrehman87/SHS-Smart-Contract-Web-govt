import { OwnerApiService } from './../../services/owner/onwer-api.service';
import { Component, OnInit } from '@angular/core';
import { Owner } from '../../models/owner/owner.model';

@Component({
  selector: 'app-all-owners',
  templateUrl: './all-owners.component.html',
  styleUrls: ['./all-owners.component.scss']
})
export class AllOwnersComponent implements OnInit {

    
  constructor(private OwnerApiService : OwnerApiService) {}

  ngOnInit() {
    this.refreshOwnerList();
  }
  refreshOwnerList(){
      this.OwnerApiService.getOwnerList().subscribe((res)=>{
        this.OwnerApiService.owners = res as Owner[];
      });
  }
  

}
