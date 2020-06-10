import { Property } from '../../models/property/property.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class PropertyApiService {

  selectedProperty : Property;
  properties: Property[];

  readonly baseURL="http://localhost:3000/property"
  constructor(private http: HttpClient) { }

  postProperty(property : Property){
      return this.http.post(this.baseURL,{property});
  }
  getProperty(){
    return this.http.get(this.baseURL);
  }
  approveProperty(id:string){
    let prop = {
      approveStatus : 'approved'
    }
    return this.http.put(this.baseURL+'/approve/'+id,{ prop });
  }

  disapproveProperty(id:string){
    let prop = {
      approveStatus : 'disapproved'
    }
    return this.http.put(this.baseURL+'/disapprove/'+id,{ prop });
  }

  deleteProperty(prop : Property){
      return this.http.delete(this.baseURL+'/'+prop._id);
  }

  getOwnerByEmail(ownerEmail: any) {
    return this.http.get("http://localhost:3000/owner/" + ownerEmail);
  }

}
