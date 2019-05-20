import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [
    {id: 1 , name: 'Ana'},
    {id: 2 , name: 'Mara'},
    {id: 3 , name: 'Ioana'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
