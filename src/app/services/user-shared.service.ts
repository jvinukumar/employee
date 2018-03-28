import { OnInit, Injectable } from "@angular/core";

import { User } from "../model/User";

@Injectable()
export class UserSharedService implements OnInit{
    users: User[]=[];

    constructor() {}
    
    ngOnInit() {
         }

    AddUser(user: User) {
        this.users.push(user);
    }
   
    getUsers() {
        return this.users;
    }

    AuthUser(sentUser: User): boolean {
        for(let i = 0;i<this.users.length;i++){
            if(this.users[i].emailId == sentUser.emailId && this.users[i].password == sentUser.password) {
                return true;
            } else {
                return false;
            }
        }
    }
}