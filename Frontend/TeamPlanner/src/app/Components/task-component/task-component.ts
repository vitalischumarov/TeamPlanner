import { Component, input, output } from '@angular/core';
import { UserServices } from '../../Services/ UserServices';
import { TaskModel } from '../../Model/TaskModel';

@Component({
  selector: 'app-task-component',
  imports: [],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css',
})
export class TaskComponent {
  constructor(private userService : UserServices){}

  task = input.required<TaskModel>();
  taskToDelete = output<number>();

  get Users() {
    return this.userService.getAllUser();
  }

  taskIsDone(){
    this.taskToDelete.emit(this.task().id)
  }
}
