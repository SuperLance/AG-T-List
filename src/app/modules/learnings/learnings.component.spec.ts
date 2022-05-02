import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningsComponent } from './learnings.component';
import { RootStore } from '../../shared/store/root.store';
import { MessengerService } from '../../shared/modules/messenger/messenger.service';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LearningsComponent', () => {
  let component: LearningsComponent;
  let fixture: ComponentFixture<LearningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningsComponent ],
      imports: [MatDialogModule, MatSnackBarModule, FormsModule, ReactiveFormsModule],
      providers: [
        RootStore,
        MessengerService,
        { provide: MatSnackBar },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
