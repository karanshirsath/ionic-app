import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
import { HomePageModule } from '../home/home.module';
import { HomePage } from '../home/home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsersPage],
  providers: [
    HomePage
  ],
})
export class UsersPageModule {}
