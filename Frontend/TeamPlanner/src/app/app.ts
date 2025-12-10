import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header-component/header-component';
import { UserComponent } from './Components/user-component/user-component';
import { AddUserComponent } from './Components/add-user-component/add-user-component';
import { UserServices } from './Services/ UserServices';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, AddUserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private userServie: UserServices){}

  displayNewUserField: boolean = false;

  get Users(){
    return this.userServie.getAllUser();
  }

  addNewUser(){
    this.displayNewUserField = true;
  }

  addUserToList(name: string){
    this.userServie.addNewUser(name);
    this.displayNewUserField = false;
  }
}
