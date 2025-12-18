import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header-component/header-component';
import { UserComponent } from './Components/user-component/user-component';
import { TaskComponent } from './Components/task-component/task-component';
import { AddUserComponent } from './Components/add-user-component/add-user-component';
import { UserServices } from './Services/ UserServices';
import { TaskServices } from './Services/TaskService';
import { AddTaskComponent } from './Components/add-task-component/add-task-component';
import { UserModel } from './Model/UserModel';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, AddUserComponent, TaskComponent, AddTaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(
    private userServie: UserServices,
    private taskServices: TaskServices,
  ) {}

  displayNewUserField: boolean = false;
  displayNewTaskComponent: boolean = false;
  Users: UserModel[] = [];

  async ngOnInit() {
    console.log('I am the init function');
    this.Users = await this.userServie.getAllUser();
    console.log(this.Users);
  }

  addNewUser() {
    this.displayNewUserField = true;
  }

    async addUserToList(name: string) {
      await this.userServie.addNewUser(name);
      this.displayNewUserField = false;
      this.Users = await this.userServie.getAllUser();
      console.log(this.Users);
  }

  selectedUserId: number = 0;
  loadUserTasks(id: number) {
    this.displayNewTaskComponent = false;
    this.selectedUserId = id;
  }

  get loadTasksfromUser() {
    return this.taskServices.getTaskByUserId(this.selectedUserId);
  }

  getTaskId(taskId: number) {
    console.log('deleted');
    let tasks = this.taskServices.deleteTask(taskId);
  }

  showNewTaskComponent() {
    this.displayNewTaskComponent = true;
  }
}
