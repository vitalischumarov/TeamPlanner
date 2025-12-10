import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-user-component',
  imports: [],
  templateUrl: './add-user-component.html',
  styleUrl: './add-user-component.css',
})
export class AddUserComponent {

  newUser = output<string>();

  addUser(input: string){
    this.newUser.emit(input);
  }
}
