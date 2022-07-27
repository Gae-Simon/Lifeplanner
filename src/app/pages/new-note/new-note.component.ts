import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createNote(title: string){
    this.taskService.createNote(title).subscribe(() => {
      this.router.navigate(['/notes']);
    });
  }

}
