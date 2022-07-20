import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  
  lists: any;
  tasks: any;

  selectedListId: any;


  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        if (params.listId) {
          this.selectedListId = params.listId;
          this.taskService.getTasks(params.listId).subscribe((tasks: any) => {
            this.tasks = tasks;
          })
        } else {
          this.tasks = undefined;
        }
      }
    );

    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;
    });
    
  }

  

}
