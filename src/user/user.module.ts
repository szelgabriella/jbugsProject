import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user/user.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DirnowDirective} from './directives/dirnow.directive';
import {BackendService} from './services/backend.services';


@NgModule({

    declarations: [
      UserListComponent,
      UserComponent,
      DirnowDirective
    ],
    providers: [
      BackendService
    ],
    imports:[
      CommonModule

    ],
    exports:[
      UserListComponent,
      UserComponent,
      DirnowDirective
    ]


  })
  export class UserModule{}
