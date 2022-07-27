import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  
  lists: any;
  tasks: any;

  selectedListId: String;


  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

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

  listDelete(listId: any){
    // We want to delete the list
    this.taskService.deleteList(listId).subscribe(() => {

      this.taskService.getLists().subscribe((lists: any) => {
        this.lists = lists;
      });
      
      this.tasks = [];

    });
  }

  taskDelete(task: any){
    this.taskService.deleteTask(task).subscribe(() => {

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
      
    })

    this.router.navigate(['../']);
  }

 
  

}
