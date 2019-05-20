import { Injectable } from '@angular/core';

import {Observable, of} from "rxjs";
import {RestUser} from '../models/RestUser.module';
import {BackendService} from './backend.services';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendService: BackendService) { }

  public getAllUsers(): Observable<RestUser[]>{
   //return this.backendService.get('jbugs/jbugs-api/users');
   //return this.backendService.get('localhost:8080/jbugs/jbugs-api/users');
   return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users' );

   /* return of([{firstName:"Harry"
      , lastName:"Potter"
      ,email:"potter@hogworts.com"
      ,mobileNumber:"00310566666"}
      ,{firstName:"Calin"
        ,lastName:"Malinas"
        ,email:"CalinMalinas@msg.group"
        ,mobileNumber:"0723456777"}]);*/
  }
}
