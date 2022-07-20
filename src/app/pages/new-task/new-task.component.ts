import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.listId = params['listId'];
        console.log(this.listId);
      }
    );


  }

  createTask(title: string){
    this.taskService.createTask(title, this.listId).subscribe((task: any) => {
        this.router.navigate(['../'], { relativeTo: this.route});
    })
  }

}
