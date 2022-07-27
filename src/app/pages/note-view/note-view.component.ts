import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.scss']
})
export class NoteViewComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  note: any;
  noteId: string;
  completed: boolean | false;

  ngOnInit(): void {
    this.loadNote();
  }

  updateNote(note: any, newContent: string){
    this.taskService.updateNote(note._id, newContent).subscribe(() => {
      this.completed = true;
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

  deleteNote(){
    this.taskService.deleteNote(this.noteId).subscribe(() => {
      this.loadNote();

      this.router.navigate(['/notes'])
    })
  }



}
