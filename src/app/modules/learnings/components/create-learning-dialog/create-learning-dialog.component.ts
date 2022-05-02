import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RootStore } from '../../../../shared/store/root.store';
import { CreateLearningForm } from '../../../../shared/resources/interfaces/learning.interface';
import { MessengerService } from '../../../../shared/modules/messenger/messenger.service';

@Component({
  selector: 'app-create-learning-dialog',
  templateUrl: './create-learning-dialog.component.html',
  styleUrls: ['./create-learning-dialog.component.css']
})
export class CreateLearningDialogComponent implements OnInit {
  learningForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateLearningDialogComponent>,
    private formBuilder: FormBuilder,
    private store: RootStore,
    private msgr: MessengerService,
  ) {
    this.learningForm = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  handleClose(): void {
    this.dialogRef.close();
  }

  onSubmit(values: CreateLearningForm): void {
    if (!this.learningForm.valid) {
      return;
    }

    this.store.addLearning(values);
    this.handleClose();
    this.msgr.message('Learning is created successfully.');
  }

  getErrorMessage(field: string): string {
    if (this.learningForm.get(field).hasError('required')) {
      return 'You must enter value';
    }

    return '';
  }
}
