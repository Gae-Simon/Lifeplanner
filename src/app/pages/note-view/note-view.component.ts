import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.scss']
})
export class NoteViewComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  note: any;
  noteId: string;

  ngOnInit(): void {
    this.loadNote();
  }

  updateNote(note: any, newContent: string){
    this.taskService.updateNote(note._id, newContent).subscribe(() => {
      this.loadNote();
    });
  }


  loadNote(){

    this.route.params.subscribe(
      (params: any) => {
        this.noteId = params['noteId'];
      }
    );

    this.taskService.loadNote(this.noteId).subscribe((note: any) => {
      this.note = note;
    });

  }

}
