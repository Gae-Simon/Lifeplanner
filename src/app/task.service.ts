import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

/*
*
* ------------ API FOR TASKS ------------
* /task-manager/***
*
*/

  getLists(){
    return this.webReqService.get('task-manager/lists');
  }

  createList(title: String){
    // We want to call the http request to create a new list
    return this.webReqService.post('task-manager/lists', { title });
  }

  deleteList(listId: String){
    return this.webReqService.delete(`task-manager/lists/${listId}`)
  }

  getTasks(listId: string){
    return this.webReqService.get(`task-manager/lists/${listId}/tasks`)
  }

  getTask(listId: string, taskId: string){
    return this.webReqService.get(`task-manager/lists/${listId}/tasks/${taskId}`)
  }

  createTask(newTitle: String, listId: String, newDescription: string){
    // We want to call the http request to create a new task
    return this.webReqService.post(`task-manager/lists/${listId}/tasks`, { title : newTitle, created: new Date(), description: newDescription });
  }

  complete(task: any){
    return this.webReqService.patch(`task-manager/lists/${task._listId}/tasks/${task._id}`, { completed: !task.completed})
  }

  deleteTask(task: any){
    return this.webReqService.delete(`task-manager/lists/${task._listId}/tasks/${task._id}`)
  }

  editTask(listId: string, id: string, newTitle: string){
    return this.webReqService.patch(`task-manager/lists/${listId}/tasks/${id}`, { title: newTitle})
  }


/*
*
* ------------ API FOR NOTES ------------
* /notes/***
*
*/

  loadNotes(){
    return this.webReqService.get('notes/note-collection');
  }

  loadNote(noteId: string){
    return this.webReqService.get(`notes/note-collection/${noteId}`)
  }

  updateNote(noteId: string, newContent: string){
    return this.webReqService.patch(`notes/note-collection/${noteId}`, { content: newContent})
  }

  createNote(title: string){
    return this.webReqService.post('notes/note-collection', {title : title})
  }

  deleteNote(noteId: string){
    return this.webReqService.delete(`notes/note-collection/${noteId}`)
  }


}
