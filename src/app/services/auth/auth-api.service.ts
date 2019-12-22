import { Agent } from '../../models/Agent/agent.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  CurrentAgent  : Agent;
  
  readonly baseURL=('http://localhost:3000/govtAgent/login');

  constructor(private http: HttpClient) { }

  
  AuthenticateAgent(Agent : Agent){
    // console.log(Agent.email);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'email' : btoa(Agent.email),
        'password': btoa(Agent.password)
      })
    };
    return this.http.get(this.baseURL,httpOptions);
  }
  getOwnerList(){
    return this.http.get(this.baseURL);
  } 
}
