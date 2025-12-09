import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header-component/header-component';
import { UserComponent } from './Components/user-component/user-component';
import { UserServices } from './Services/ UserServices';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private userServie: UserServices){}

  get Users(){
    return this.userServie.getAllUser();
  }
}
