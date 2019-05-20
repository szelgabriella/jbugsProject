import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {

  hobbies = [
    {id: 1, name:'Music'},
    {id:2 , name:'Horseriding'},
    {id:3 , name:'Nothing'}
  ]

  courses = [
    {id: 1, name:'Management'},
    {id:2 , name:'Art'},
    {id:3 , name:'Health'}
  ]
  text1 = "alal"
  text2 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus tortor nec molestie sodales. Curabitur tempus quis urna eget tristique. Nulla diam ligula, laoreet in lectus a, fermentum congue eros. Fusce tellus tortor, fringilla eget quam nec, efficitur maximus mauris. Aenean venenatis vestibulum est, vitae ornare est semper nec. Maecenas rutrum lacinia ante sed imperdiet. Aenean dolor ante, semper id ligula ut, facilisis mollis quam. Proin eu tincidunt lacus. Pellentesque fringilla porttitor leo, sed lacinia enim pellentesque at. Fusce nunc augue, sollicitudin in justo nec, viverra condimentum dolor. Praesent consequat sollicitudin enim, eget commodo nulla facilisis ut. Proin eleifend ipsum nec felis accumsan lacinia."

  constructor() { }

  ngOnInit() {

  }
  log(x){
    console.log(x);

  }
  submit(x){
    console.log(x);
  }

}
