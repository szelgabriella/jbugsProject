import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {RestUser} from '../models/RestUser.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: RestUser[];
  @Output()
  public output = new  EventEmitter<RestUser>();
  public  showList = true;
  constructor(private userService:UserService) { }


  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe((userList) => {this.userList = userList;})
  }
  alertUser(person: RestUser){
    this.output.emit(person);
  }


}
