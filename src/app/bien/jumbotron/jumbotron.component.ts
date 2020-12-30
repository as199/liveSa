import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  connecter() {
    this.authService.login('admin@gmail.com','passer');
  }

  deconnecter() {
    this.authService.logout();
  }
}
