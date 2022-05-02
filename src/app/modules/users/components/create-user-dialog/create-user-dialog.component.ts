import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RootStore } from '../../../../shared/store/root.store';
import { CreateUserForm } from '../../../../shared/resources/interfaces/user.interface';
import { MessengerService } from '../../../../shared/modules/messenger/messenger.service';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private formBuilder: FormBuilder,
    private store: RootStore,
    private msgr: MessengerService,
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
  }

  handleClose(): void {
    this.dialogRef.close();
  }

  onSubmit(values: CreateUserForm): void {
    if (!this.userForm.valid) {
      return;
    }

    this.store.addUser(values);
    this.handleClose();
    this.msgr.message('User is created successfully.');
  }

  getErrorMessage(field: string): string {
    if (this.userForm.get(field).hasError('required')) {
      return 'You must enter value';
    }

    return this.userForm.get(field).hasError('email') ? 'Not valid email' : '';
  }
}
