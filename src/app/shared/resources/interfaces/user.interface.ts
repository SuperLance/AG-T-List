import { Learning } from './learning.interface';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  learnings?: Learning[];
}

export interface CreateUserForm {
  name: string;
  email: string;
}
