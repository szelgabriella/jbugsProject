import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../models/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  public user: User;
  public firstname:String;
  constructor() { this.firstname = "Johndoe"; }
  @Output()
  public output = new  EventEmitter<User>();






  alertUser(person: User){
    this.output.emit(person);

  }

  ngOnInit() {
  }


}
