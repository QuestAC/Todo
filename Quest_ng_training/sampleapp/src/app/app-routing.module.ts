import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Train1Component } from './train1/train1.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InterComponent } from './inter/inter.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';

const routes: Routes = [
  {path:'t1',component:Train1Component},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'mentorlogin',component:MentorLoginComponent},
  {path:'inter',component:InterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
