import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';
import * as TaskActions from './actions/task.actions';
import { selectTasks } from './reducers/task.selectors';
import { AppState } from './models/state.models';
import { selectLoading } from './reducers/task.selectors';

let currentId = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tasks$!: Observable<Task[]>; // Observable pour la liste des tâches
  isLoading$!: Observable<boolean>; // Observable pour le statut de chargement
  newTaskName: string = ''; // Le nom de la nouvelle tâche à ajouter

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.tasks$ = this.store.select(selectTasks);

    // Sélectionne les tâches depuis le store
    this.isLoading$ = this.store.select(selectLoading); // Sélectionne le statut de chargement depuis le store
    this.tasks$.subscribe((data) => {
      console.log('Tasks:', data);
    });
    // Demande au store de charger les tâches au démarrage
    this.store.dispatch(TaskActions.loadTasks());
  }

  completeTask(task: Task) {
    this.store.dispatch(TaskActions.completeTask({ taskId: task.id }));
  }
}
