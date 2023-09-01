import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { AppState } from '../models/state.models';
import * as TaskActions from '../actions/task.actions';

let currentId = 1;

@Component({
  selector: 'task-add',
  templateUrl: 'task-add.component.html',
})
export class TaskAddComponent {
  newTaskName: string = '';
  tasks$: Observable<Task[]>;

  constructor(private store: Store<AppState>) {
    // Remplir l'Observable tasks$ en sélectionnant la partie correspondante de l'état
    this.tasks$ = this.store.select((state) => state.taskState.tasks);
  }

  addTask() {
    if (this.newTaskName.trim()) {
      this.store.dispatch(
        TaskActions.addTask({
          task: { id: currentId++, name: this.newTaskName, completed: false },
        })
      );
      this.newTaskName = ''; // Réinitialise le champ après l'ajout
    }
  }

  deleteTask(taskId: number) {
    this.store.dispatch(TaskActions.deleteTask({ taskId }));
  }
}
