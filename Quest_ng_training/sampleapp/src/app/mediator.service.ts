import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  constructor(public h:HttpClient) { }

  sentdata(a:any){
    console.log(a)
    return this.h.post('https://varsha2000.pythonanywhere.com/register/',a)
  }

  loginuser(a:any){
    console.log(a)
    return this.h.post('https://varsha2000.pythonanywhere.com/log123/',a)
  }

  addtodo(a:any){
    console.log(a)
    return this.h.post('https://varsha2000.pythonanywhere.com/add_to_do/',a)
  }

  viewtodo(a:any){
    let a1 = parseInt(a)
    console.log(a1)
    return this.h.get('https://varsha2000.pythonanywhere.com/view_to_do/?user_id='+a1)
  }

  deltask(id:any){
    return this.h.delete('https://varsha2000.pythonanywhere.com/deletetask/'+id)
  }

  updatetask(id:any){
    let a1 = parseInt(id)
    console.log(a1)
    return this.h.get('https://varsha2000.pythonanywhere.com/updatetask/?id='+a1)
  }

  updatetask_post(a:any){
    return this.h.post('https://varsha2000.pythonanywhere.com/updatetask/',a)
  }

  getspecific(user:any,s:any){
    return this.h.get('https://varsha2000.pythonanywhere.com/view_completed_to_do/'+user+'/'+s)
  }

  
}
