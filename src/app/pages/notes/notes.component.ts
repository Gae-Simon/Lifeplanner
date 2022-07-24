import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  notes: any;

  ngOnInit(): void {

    this.taskService.loadNotes().subscribe((notes: any) => {
      this.notes = notes;
    });

  }

}
