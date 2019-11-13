import { HttpClient } from '@angular/common/http';
import { Rent } from './rent.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class RentService {
  selectedRent : Rent;
  rents : Rent[];
  readonly baseURL = "http://localhost:3000/rent";
  constructor(private http: HttpClient) { }

  postRent(rent: Rent){
    return   this.http.post(this.baseURL,rent);
  }
  getRent(){
    return  this.http.get(this.baseURL);
  }
  getOwneById(rent : Rent){
    return  this.http.get(this.baseURL+'/${rent._id}');
  }
  editRent(rent: Rent){
    return  this.http.put(this.baseURL+'/${rent._id}',rent);
  }
  deleteRent(rent : Rent){
    return  this.http.delete(this.baseURL+'/${rent._id}');
  }
}
