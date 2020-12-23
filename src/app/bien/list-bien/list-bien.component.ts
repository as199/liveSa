import {Component, Input, OnInit} from '@angular/core';
import {Bien} from './bien.model';
import {BienService} from '../bien.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.scss']
})
export class ListBienComponent implements OnInit {

  @Input() search = '';
  biens: Bien[] = [];

  constructor(private bienService: BienService) { }

  ngOnInit(): void {
    this.biens = this.bienService.getAllBiens();
  }

}
