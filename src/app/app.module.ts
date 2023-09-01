import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './reducers/task.reducer';
import { FormsModule } from '@angular/forms';
import { TaskAddComponent } from './component/task-add.component';

@NgModule({
  declarations: [AppComponent, TaskAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ taskState: taskReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
