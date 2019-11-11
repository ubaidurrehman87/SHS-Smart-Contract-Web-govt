import { Property } from './property.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  selectedProperty : Property;
  properties: Property[];

  readonly baseURL="http://localhost:3000/property"
  constructor(private http: HttpClient) { }

  postProperty(prop : Property){
      console.log(prop);
      return this.http.post(this.baseURL,prop);
  }
  getProperty(){
    
  }
}
