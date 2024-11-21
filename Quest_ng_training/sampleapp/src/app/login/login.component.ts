import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public c:MediatorService,public r:Router,private translate: TranslateService){
    translate.setDefaultLang('en');
  }

  log123(a:any){
    console.log(a)
    this.c.loginuser(a).subscribe(
      (res:any)=>{
        console.log(res,"here")
        if (res['status']==1){
          alert("success")
          console.log(res['values'])
          this.r.navigate(['home'], { 
            queryParams: res['values']
          });
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

  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
