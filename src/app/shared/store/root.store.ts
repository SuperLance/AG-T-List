import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateUserForm, User } from '../resources/interfaces/user.interface';
import { CreateLearningForm, Learning } from '../resources/interfaces/learning.interface';
import { learningsMock } from '../resources/mock/learnings.mock';
import { usersMock } from '../resources/mock/users.mock';

@Injectable()
export class RootStore {
  usersObserver: Observable<User[]>;
  usersSubject: BehaviorSubject<User[]>;

  learningsObserver: Observable<Learning[]>;
  learningsSubject: BehaviorSubject<Learning[]>;

  public get users(): User[] {
    return this.usersSubject.value;
  }
  public set users(value: User[]) {
    this.usersSubject.next(value);
  }

  public get learnings(): Learning[] {
    return this.learningsSubject.value;
  }

  public set learnings(value: Learning[]) {
    this.learningsSubject.next(value);
  }

  constructor() {
    this.usersSubject = new BehaviorSubject<User[]>(usersMock);
    this.usersObserver = this.usersSubject.asObservable();

    this.learningsSubject = new BehaviorSubject<Learning[]>(learningsMock);
    this.learningsObserver = this.learningsSubject.asObservable();
  }

  removeUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  addUser(data: CreateUserForm): void {
    const newUser = {
      id: `${Math.random()}`,
      name: data.name,
      email: data.email,
    };

    this.users = [newUser, ...this.users];
  }

  removeLearning(id: string): void {
    this.learnings = this.learnings.filter((item) => item.id !== id);
  }

  addLearning(data: CreateLearningForm): void {
    const newLearning = {
      id: `${Math.random()}`,
      name: data.name,
      status: data.status,
    };

    this.learnings = [newLearning, ...this.learnings];
  }

  toggleLearningStatus(id): void {
    this.learnings = this.learnings.map((item) => {
      if (item.id === id) {
        if (item.status === 'active') {
          item.status = 'archived';
        } else {
          item.status = 'active';
        }
      }
      return item;
    });
  }

  assignUsers(learning: Learning, userIds: string[]): void {
    this.users = this.users.map((user) => {
      if (userIds.includes(user.id)) {
        if (!user.learnings) {
          user.learnings = [ learning ];
        } else if (!user.learnings.some((item) => item.id === learning.id)) {
          user.learnings = [...user.learnings, learning];
        }
      } else {
        if (user.learnings) {
          user.learnings = user.learnings.filter((item) => item.id !== learning.id);
        }
      }

      return user;
    });
  }
}
