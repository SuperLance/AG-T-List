import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUsersDialogComponent } from './assign-users-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {RootStore} from '../../../../shared/store/root.store';
import {MessengerService} from '../../../../shared/modules/messenger/messenger.service';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('AssignUsersDialogComponent', () => {
  let component: AssignUsersDialogComponent;
  let fixture: ComponentFixture<AssignUsersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ AssignUsersDialogComponent ],
      providers: [
        RootStore,
        MessengerService,
        { provide: MatSnackBar },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => null } },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignUsersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
