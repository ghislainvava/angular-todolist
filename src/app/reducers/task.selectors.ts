import { createSelector } from '@ngrx/store';
import { AppState } from '../models/state.models';
import { TaskState } from '../models/state.models';

export const selectTaskState = (state: AppState) => state.taskState;
export const selectTasks = createSelector(
  selectTaskState,
  (taskState: TaskState) => taskState?.tasks
);
export const selectLoading = createSelector(
  selectTaskState,
  (taskState: TaskState) => (taskState ? taskState.loading : false)
);
