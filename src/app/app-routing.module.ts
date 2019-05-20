import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {LoginComponent} from "./login/login.component";
import {BugsComponent} from "./bugs/bugs.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoggedInGuard} from "./logged-in.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            component: UsersComponent,
          },
          {
            path: ':userId',
            children: [
              {
                path: 'edit',
                component: EditUserComponent
              }
            ]

          }
        ]
      },
      {
        path: 'bugs',
        component: BugsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
