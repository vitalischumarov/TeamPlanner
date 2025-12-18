import { Component, input, output } from '@angular/core';
import { UserModel } from '../../Model/UserModel';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent {
  user = input.required<UserModel>();

  selectedUser = output<number>();

  sendId(){
    return this.selectedUser.emit(this.user().Id);
  }
}
