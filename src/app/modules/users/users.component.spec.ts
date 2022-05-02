import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {RootStore} from '../../shared/store/root.store';
import {MatDialogModule} from '@angular/material/dialog';
import {MessengerService} from '../../shared/modules/messenger/messenger.service';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ UsersComponent ],
      providers: [
        RootStore,
        MessengerService,
        { provide: MatSnackBar },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
