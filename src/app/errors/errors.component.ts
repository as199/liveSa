import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  errorMessage : string ='';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage = this.activatedRoute.snapshot.data['message'];
  }

}
