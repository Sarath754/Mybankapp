import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
// import { homedir } from 'os';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'history', component:HistoryComponent},
  {path:'profile',component:ProfileComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
