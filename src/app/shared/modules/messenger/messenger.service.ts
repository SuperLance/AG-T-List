import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageComponent } from './message/message.component';

@Injectable()
export class MessengerService {
  constructor(protected snackbar: MatSnackBar) {}

  public message(message: string, duration: number = 3000): void {
    this.snackbar.openFromComponent(MessageComponent, {
      data: { message, type: 'success' },
      panelClass: ['snackbar-success'],
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
