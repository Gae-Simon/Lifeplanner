import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getLists(){
    return this.webReqService.get('lists');
  }

  createList(title: String){
    // We want to call the http request to create a new list
    return this.webReqService.post('lists', { title });
  }

  deleteList(listId: String){
    return this.webReqService.delete(`lists/${listId}`)
  }

  getTasks(listId: string){
    return this.webReqService.get(`lists/${listId}/tasks`)
  }

  createTask(title: String, listId: String){
    // We want to call the http request to create a new task
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }

  complete(task: any){
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, { completed: !task.completed})
  }


}
