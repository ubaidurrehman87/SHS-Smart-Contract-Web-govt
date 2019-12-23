
import { Owner } from '../../models/owner/owner.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class OwnerApiService {
  selectedOwner  : Owner;
  owners : Owner[];
  
  readonly baseURL=('http://localhost:3000/owner');

  constructor(private http: HttpClient) { }

  
  postOwner(owner : Owner){
    return this.http.post(this.baseURL,owner);
  }
  getOwnerList(){
    return this.http.get(this.baseURL);
  }
  

}
