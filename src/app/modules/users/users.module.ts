import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RootStore } from '../../shared/store/root.store';
import { CreateUserDialogComponent } from './components/create-user-dialog/create-user-dialog.component';
import {SharedModule} from '../../shared/shared.module';
import {MaterialModule} from '../../shared/modules/material.module';
import { LearningListDialogComponent } from './components/learning-list-dialog/learning-list-dialog.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import {MessengerModule} from '../../shared/modules/messenger/messenger.module';

@NgModule({
  declarations: [
    UsersComponent,
    CreateUserDialogComponent,
    LearningListDialogComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    MessengerModule,
  ],
  providers: [
    RootStore,
  ]
})
export class UsersModule { }
