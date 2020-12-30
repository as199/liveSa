import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@ViewChild('formLogin') myform : NgForm | any;
  constructor( private authService: AuthService) { }

  ngOnInit(): void {

  }
  proposerEmail(){
    const  myEmail = 'admin@gmail.com';
    this.myform.setValue(
      {email: myEmail,
        password: ''}
    );
}
  connecter() {
    this.authService.login('admin@gmail.com','passer');
  }

  login() {
    //console.log(this.myform.value)
    this.authService.login(this.myform.value.email,this.myform.value.password)
  }
}
