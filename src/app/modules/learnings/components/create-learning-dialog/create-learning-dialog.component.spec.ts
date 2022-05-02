import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLearningDialogComponent } from './create-learning-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {RootStore} from '../../../../shared/store/root.store';
import {MessengerService} from '../../../../shared/modules/messenger/messenger.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder} from '@angular/forms';

describe('CreateLearningDialogComponent', () => {
  let component: CreateLearningDialogComponent;
  let fixture: ComponentFixture<CreateLearningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLearningDialogComponent ],
      imports: [MatDialogModule],
      providers: [
        RootStore,
        MessengerService,
        FormBuilder,
        { provide: MatSnackBar },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => null } },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLearningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
