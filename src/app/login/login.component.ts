import { Component, OnInit } from '@angular/core';

import { UserSharedService } from '../services/user-shared.service';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  authorized=true ;
  constructor(private userService: UserSharedService, private router: Router) { 
    
  }

  ngOnInit() {
    this.user=new User();
    // this.user.emailId = 'vinod@gmail.com';
    // this.user.password = 'admin';
  }
 
  onSubmit() { 
    console.log(this.user);
    this.authorized=this.userService.AuthUser(this.user);
    if(this.authorized === true) {
      this.router.navigate(['home']);
    } else {
      this.authorized = false;
    }
  } 
  


}
