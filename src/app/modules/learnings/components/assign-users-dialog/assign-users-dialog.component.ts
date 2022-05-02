import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Learning } from '../../../../shared/resources/interfaces/learning.interface';
import { RootStore } from '../../../../shared/store/root.store';
import { User } from '../../../../shared/resources/interfaces/user.interface';
import { MessengerService } from '../../../../shared/modules/messenger/messenger.service';

@Component({
  selector: 'app-assign-users-dialog',
  templateUrl: './assign-users-dialog.component.html',
  styleUrls: ['./assign-users-dialog.component.css']
})
export class AssignUsersDialogComponent implements OnInit, OnDestroy {
  userIds = [];

  usersSubscription: Subscription;

  constructor(
    private store: RootStore,
    private dialogRef: MatDialogRef<AssignUsersDialogComponent>,
    private msgr: MessengerService,
    @Inject(MAT_DIALOG_DATA) public learning: Learning,
  ) { }

  get users(): User[] {
    return this.store.users;
  }

  ngOnInit(): void {
    this.usersSubscription = this.store.usersObserver.subscribe((users) => {
      users.forEach((user) => {
        if (
          user.learnings
          && user.learnings.some((item) => item.id === this.learning.id)
        ) {
          this.userIds.push(user.id);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  handleClose(): void {
    this.dialogRef.close();
  }

  assignUsers(): void {
    this.store.assignUsers(this.learning, this.userIds);
    this.handleClose();
    this.msgr.message('User assignment is updated successfully.');
  }
}
