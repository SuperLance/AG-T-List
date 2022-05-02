import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Learning} from '../../../../shared/resources/interfaces/learning.interface';

@Component({
  selector: 'app-learning-list-dialog',
  templateUrl: './learning-list-dialog.component.html',
  styleUrls: ['./learning-list-dialog.component.css']
})
export class LearningListDialogComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status'];
  dataSource = new MatTableDataSource<Learning>([]);

  constructor(
    private dialogRef: MatDialogRef<LearningListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public learnings: Learning[],
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Learning>(this.learnings);
  }
}
