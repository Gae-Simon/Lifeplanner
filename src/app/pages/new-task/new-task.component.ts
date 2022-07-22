import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId: string;

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
    this.taskService.createTask(title, this.listId).subscribe(() => {
      this.navigateBack();
    })
  }

  navigateBack(){
    this.router.navigate(['/task-manager/lists', this.listId]);
  }

}
