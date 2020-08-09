import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { UsersPageModule } from '../users/users.module';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,

  },
  {
    path:"edit",
    component:EditComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
