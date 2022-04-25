import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllUsersComponent } from './all-users/all-users.component';
import { HomeComponent } from './home/home.component';
import { RegistersComponent } from './registers/registers.component';
import { SearchComponent } from './search/search.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  {
    path : "search" , component : SearchComponent
  },
  {
    path : "all-users" , component : AllUsersComponent
  },
  {
    path: "register" , component : RegistersComponent
  },
  {
    path: "home" , component : HomeComponent
  },
  {
    path: "crudapp" , component : HomeComponent
  },
  {
    path: "all-users/editCust/:id" , component : EditUserComponent
  },
  {
    path: "" , component : HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
