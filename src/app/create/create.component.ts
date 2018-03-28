import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserSharedService } from '../services/user-shared.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   
  user: User;
  constructor(private userService: UserSharedService) { }

  // getAddUser(): void {
  //   this.userService.AddUser(this.user);

  // }

  ngOnInit() {
     this.user = new User();
  }

  onSubmit() {
    this.userService.AddUser(this.user);
    console.log(this.user);
  }

}
