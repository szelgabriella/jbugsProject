import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    console.log("Login form value ", form);
    //this.router.navigate(['/dashboard'], {queryParams: {page: 1}});
    this.router.navigate(['/dashboard']);
  }

}
