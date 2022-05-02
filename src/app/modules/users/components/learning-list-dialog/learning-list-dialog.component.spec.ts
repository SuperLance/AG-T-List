import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningListDialogComponent } from './learning-list-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

describe('LearningListDialogComponent', () => {
  let component: LearningListDialogComponent;
  let fixture: ComponentFixture<LearningListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningListDialogComponent ],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: { close: () => null } },
        { provide: MAT_DIALOG_DATA, useValue: { learnings: [] } },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
