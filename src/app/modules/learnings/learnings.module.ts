import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningsComponent } from './learnings.component';
import { LearningsRoutingModule } from './learnings-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {MaterialModule} from '../../shared/modules/material.module';
import { CreateLearningDialogComponent } from './components/create-learning-dialog/create-learning-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RootStore} from '../../shared/store/root.store';
import { AssignUsersDialogComponent } from './components/assign-users-dialog/assign-users-dialog.component';
import {MessengerModule} from '../../shared/modules/messenger/messenger.module';

@NgModule({
  declarations: [
    LearningsComponent,
    CreateLearningDialogComponent,
    AssignUsersDialogComponent
  ],
  imports: [
    CommonModule,
    LearningsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MessengerModule,
  ],
  providers: [
    RootStore,
  ]
})
export class LearningsModule { }
