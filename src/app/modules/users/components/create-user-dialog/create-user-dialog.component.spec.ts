import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserDialogComponent } from './create-user-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';
import {RootStore} from '../../../../shared/store/root.store';
import {MessengerService} from '../../../../shared/modules/messenger/messenger.service';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('CreateUserDialogComponent', () => {
  let component: CreateUserDialogComponent;
  let fixture: ComponentFixture<CreateUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUserDialogComponent],
      imports: [MatDialogModule],
      providers: [
        RootStore,
        MessengerService,
        { provide: MatSnackBar },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: FormBuilder },
        { provide: MatDialogRef, useValue: { close: () => null } },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
