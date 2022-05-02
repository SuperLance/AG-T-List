import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../shared/resources/interfaces/user.interface';
import { RootStore } from '../../shared/store/root.store';
import { CreateUserDialogComponent } from './components/create-user-dialog/create-user-dialog.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { LearningListDialogComponent } from './components/learning-list-dialog/learning-list-dialog.component';
import { MessengerService } from '../../shared/modules/messenger/messenger.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['avatar', 'name', 'email', 'action'];
  dataSource = new MatTableDataSource<User>([]);
  search = '';

  usersSubscription: Subscription;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private store: RootStore,
    public dialog: MatDialog,
    private msgr: MessengerService,
  ) { }

  get users(): User[] {
    return this.store.users;
  }

  ngOnInit(): void {
    this.usersSubscription = this.store.usersObserver.subscribe((users) => {
      this.dataSource = new MatTableDataSource<User>(users);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  applyFilter(): void {
    const filteredUsers = this.users.filter((user) => {
      return (
        user.name.toLowerCase().includes(this.search.toLowerCase())
        || user.email.toLowerCase().includes(this.search.toLowerCase())
      );
    });

    this.dataSource = new MatTableDataSource<User>(filteredUsers);
    this.dataSource.paginator = this.paginator;
  }

  removeUser(userId: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: 'Are you sure you want to remove this user?',
    })
      .afterClosed()
      .subscribe((value: boolean) => {
        if (value) {
          this.store.removeUser(userId);
          this.applyFilter();
          this.msgr.message('User is removed successfully');
        }
      });
  }

  addUser(): void {
    this.dialog.open(CreateUserDialogComponent).afterClosed()
      .subscribe(() => {
        this.applyFilter();
      });
  }

  openLearningList(user: User): void {
    this.dialog.open(LearningListDialogComponent, {
      width: '500px',
      data: user.learnings,
    });
  }
}
