import {UserListComponent} from '../user-list/user-list.component';
import {UserComponent} from '../user/user.component';
import {CommonModule} from '@angular/common';

export interface User {
  firstname: string;
  lastname: string;
  age: number;
  roles: string[];
}

