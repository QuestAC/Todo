import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-train1',
  templateUrl: './train1.component.html',
  styleUrls: ['./train1.component.css']
})
export class Train1Component {


  regdata(a:any){
    console.log(a)
    this.c.sentdata(a).subscribe(
      (res:any)=>{
        console.log(res,"here")
        if (res['status']==1){
          alert("success")
          // this.r.navigate(['view'])
        }
        else if (res["status"]==2){
          alert('failed')
        }
        else{
        alert("already exists")
      }
      }
    )
  }
  constructor(public c:MediatorService){}
  }
   