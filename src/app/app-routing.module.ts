import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoostedComponent } from './pages/boosted/boosted.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { NotesComponent } from './pages/notes/notes.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

const routes: Routes = [

{path: '', redirectTo: 'task-manager/lists', pathMatch: 'full'},
{path: 'task-manager/new-list', component: NewListComponent},
{path: 'task-manager/lists/:listId', component: TaskViewComponent},
{path: 'task-manager/lists', component: TaskViewComponent},
{path: 'task-manager/lists/:listId/new-task', component: NewTaskComponent},
{path: 'task-manager/lists/:listId/:taskId/update-task', component: EditTaskComponent},

{path: 'boosted', component: BoostedComponent},

{path: 'notes', component: NotesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
