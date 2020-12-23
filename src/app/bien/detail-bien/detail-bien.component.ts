import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UtilsService} from '../../utils.service';
import {BienService} from '../bien.service';
import { Bien } from '../list-bien/bien.model';
@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss']
})
export class DetailBienComponent implements OnInit {
  donnees: Bien |any;
  constructor(private activatedRoute: ActivatedRoute,private serviceBien: BienService ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.donnees = this.serviceBien.getBienById(+id);
  }

}
