import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private usersService:UserService) {}

  user1Activated = false;
  user2Activated = false;

  ngOnInit() {
    this.usersService.userActivated.subscribe(
      (id:Number) => {
        if(id === 1)  {
         this.user1Activated = true
        } else if(id === 2 ) {
          this.user2Activated = true;
        }
      }
    )
  }


}
