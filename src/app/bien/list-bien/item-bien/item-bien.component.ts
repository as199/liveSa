import { Component, OnInit, Input } from '@angular/core';
import {Bien} from '../bien.model';
import {UtilsService} from '../../../utils.service';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.scss']
})
export class ItemBienComponent implements OnInit {

  constructor(private utilsService: UtilsService) { }

  @Input ()
  item: any;

  ngOnInit(): void {
  }



}
