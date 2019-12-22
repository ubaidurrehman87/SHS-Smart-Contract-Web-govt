import { Agent } from '../../models/Agent/agent.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupApiService {


  readonly baseURL=('http://localhost:3000/govtAgent');

  constructor(private http : HttpClient) { }

  
  AddAgent(Agent : Agent){
    return this.http.post(this.baseURL,Agent);
  }
  getOwnerList(){
    return this.http.get(this.baseURL);
  } 
}
