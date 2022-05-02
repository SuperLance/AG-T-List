import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { RootStore } from '../../shared/store/root.store';
import { Learning } from '../../shared/resources/interfaces/learning.interface';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { CreateLearningDialogComponent } from './components/create-learning-dialog/create-learning-dialog.component';
import { AssignUsersDialogComponent } from './components/assign-users-dialog/assign-users-dialog.component';
import { MessengerService } from '../../shared/modules/messenger/messenger.service';

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.css']
})
export class LearningsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'status', 'action'];
  dataSource = new MatTableDataSource<Learning>([]);
  search = '';

  learningSubscription: Subscription;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private store: RootStore,
    public dialog: MatDialog,
    private msgr: MessengerService,
  ) { }

  get learnings(): Learning[] {
    return this.store.learnings;
  }

  ngOnInit(): void {
    this.learningSubscription = this.store.learningsObserver.subscribe((learnings) => {
      this.dataSource = new MatTableDataSource<Learning>(learnings);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy(): void {
    this.learningSubscription.unsubscribe();
  }

  applyFilter(): void {
    const filteredLearnings = this.learnings.filter((item) => {
      return item.name.toLowerCase().includes(this.search.toLowerCase());
    });

    this.dataSource = new MatTableDataSource<Learning>(filteredLearnings);
    this.dataSource.paginator = this.paginator;
  }

  removeLearning(learningId: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: 'Are you sure you want to remove this learning?',
    })
      .afterClosed()
      .subscribe((value: boolean) => {
        if (value) {
          this.store.removeLearning(learningId);
          this.applyFilter();
          this.msgr.message('Learning is removed successfully.');
        }
      });
  }

  addLearning(): void {
    this.dialog.open(CreateLearningDialogComponent).afterClosed()
      .subscribe(() => {
        this.applyFilter();
      });
  }

  toggleStatus(id: string): void {
    this.store.toggleLearningStatus(id);
    this.applyFilter();
    this.msgr.message('Learning status is changed successfully.');
  }

  assignUsers(learning: Learning): void {
    this.dialog.open(AssignUsersDialogComponent, {
      width: '500px',
      data: learning
    });
  }
}
