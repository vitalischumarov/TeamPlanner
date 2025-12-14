import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-add-task-component',
  imports: [],
  templateUrl: './add-task-component.html',
  styleUrl: './add-task-component.css',
})
export class AddTaskComponent {

  currentUserId = input<number>();

  saveTask(){
    //hier muss die Funktion aufgerufen werden zum Task erstellen
  }
}
