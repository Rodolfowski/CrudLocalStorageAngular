import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDashComponent } from './task-dash/task-dash.component';
const routes: Routes = [ {
    path: '',
    redirectTo: 'task-list',
    pathMatch: 'full'
  },
  {
    path: 'task-list',
    component: TaskDashComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
