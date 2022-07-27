import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.scss']
})
export class TaskOverviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  task: any;
  taskId: string;
  listId: string;

  ngOnInit(): void {


    this.route.params.subscribe(
      (params: any) => {
        this.taskId = params['taskId'];
        this.listId = params['listId'];
      }
    );

    this.taskService.getTask(this.listId, this.taskId).subscribe((task) => {
      this.task = task;
    })

    

  }

}
