import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediatorService } from '../mediator.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute,public c:MediatorService,public r:Router) {}
  
data = {id: "",email: "",first_name: "",gender: "",last_name: "",mobilenumber: "",password: "",username: ""}
todo = []
complete = []
incomplete = []
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params); // { key1: 'value1', key2: 'value2' }
      this.data['id']=params['id']
      this.data['email']=params['email']
      this.data['first_name']=params['first_name']
      this.data['last_name']=params['last_name']
      this.data['mobilenumber']=params['mobilenumber']
      this.data['password']=params['password']
      this.data['username']=params['username']
      this.data['gender']=params['gender']
    });
    this.c.viewtodo(this.data['id']).subscribe(
      (res:any)=>{
        this.todo = res['data']
        console.log(this.todo)
      }
    )

    this.c.getspecific(this.data.id,1).subscribe(
      (res:any)=>{
        this.complete = res['data']
      }
    )

    this.c.getspecific(this.data.id,0).subscribe(
      (res:any)=>{
        this.incomplete = res['data']
      }
    )
  }

  b={title: '', discription: '',user: ''}
  addtodo(a:any){
    this.b['title']=a['title']
    this.b['discription']=a['discription']
    this.b['user']=this.data['id']
    this.c.addtodo(this.b).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }

  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
    this.showall1 = false;
    this.showincomplete0=false;
    this.showcomplete1 = false;
  }

  showall1 = false;
  showall() {
    this.showall1 = !this.showall1;
    this.isDivVisible = false;
    this.showincomplete0=false;
    this.showcomplete1 = false;
  }

  showcomplete1 = false;
  showcomplete() {
    this.showcomplete1 = !this.showcomplete1;
    this.showall1 = false;
    this.isDivVisible = false;
    this.showincomplete0=false;
  }

  showincomplete0=false;
  showincomplete(){
    this.showincomplete0=!this.showincomplete0;
    this.showall1 = false;
    this.isDivVisible = false;
    this.showcomplete1 = false;
  }

  deletask(i:any){
    this.c.deltask(i).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }

  show = false;
  d = {id:'', title: 'hh', discription: 'hhh',status:0,user:0}

  update(i:any){
    this.c.updatetask(i).subscribe(
      (res:any)=>{
        console.log(res)
        this.d.id=res['data']['id']
        this.d.title=res['data']['title']
        this.d.discription=res['data']['discription']
        this.d.status=res['data']['status']
        this.d.user=res['data']['user']

        this.show = !this.show
        this.showall1 = false;
        this.isDivVisible = false;
        this.showincomplete0=false;
        this.showcomplete1 = false;
        console.log(this.d)
        // this.r.navigate(['home'], { 
        //   queryParams: res['values']
        // });
      }
    )
  }

  updatetodo(a:any){
    this.d.title=a['title']
    this.d.discription=a['discription']
    this.d.status=parseInt(a['status'])
    this.c.updatetask_post(this.d).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
    this.show = !this.show
  }

}


