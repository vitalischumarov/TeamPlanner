import { Injectable } from "@angular/core";
import { DummyTasks } from "../Model/DummyTasks";
import { TaskModel } from "../Model/TaskModel";

@Injectable({providedIn: 'root'})
export class TaskServices {
    
     getTaskByUserId(id: number) {
         let tasks: TaskModel[] = DummyTasks.filter((task) => id === task.userId);
        return tasks;
     }

     deleteTask(id: number){}
}