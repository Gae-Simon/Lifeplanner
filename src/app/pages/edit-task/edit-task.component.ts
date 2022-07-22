import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {


  listId : string;
  taskId : string;
  task: any;
  currentTitle : string;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.listId = params['listId'];
        this.taskId = params['taskId'];
      }
    );

    this.taskService.getTask(this.listId, this.taskId).subscribe((task: any) => {
      this.currentTitle = task.title;
    })
  }

  editTask(newTitle: any){
    this.taskService.editTask(this.listId, this.taskId, newTitle).subscribe(() => {
      this.navigateBack();
    })
  }

  navigateBack(){
    this.router.navigate(['/lists', this.listId]);
  }





}
