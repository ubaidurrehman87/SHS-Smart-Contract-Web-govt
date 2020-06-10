import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SHS-Smart-Contract-Web-govt';
  token : String;
  username: string;
  constructor(){
    this.token = localStorage.getItem('token');
    this.username = localStorage.getItem('name');
  }
  ngOnInit(){

  }

}
