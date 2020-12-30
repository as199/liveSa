import { Injectable } from '@angular/core';
import {User, UsersService} from "./users.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  connectedUser: User | any;
  constructor(private userService: UsersService, private router: Router) { }
isAuthentucated(){
const promise = new Promise(
  (resolve, reject)=> {
    setTimeout(()=> {
      resolve(this.loggedIn)
    },1000);
  }
);
return promise;
}
login(email: string='',pwd: string=''){
 this.connectedUser = this.userService.getUserByEmail(email,pwd);
 // if (this.connectedUser){
 //   this.loggedIn = true;
 // }else {
 //   this.loggedIn = false;
 // }
  this.loggedIn = this.connectedUser ? true :false;
}

logout(){
    this.loggedIn = false;
    this.connectedUser = null;
    this.router.navigate(['/']);

}


}
