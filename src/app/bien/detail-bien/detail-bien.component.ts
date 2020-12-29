import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UtilsService} from '../../utils.service';
import {BienService} from '../bien.service';
import { Bien } from '../list-bien/bien.model';
@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss']
})
export class DetailBienComponent implements OnInit, OnDestroy {
  donnees: Bien |any;
  constructor(private activatedRoute: ActivatedRoute, private serviceBien: BienService ) {
    console.log('je suis le constructeur');
  }

  ngOnInit(): void {
    console.log('je suis le oninit');
    let id = this.activatedRoute.snapshot.params.id;
    this.donnees = this.serviceBien.getBienById(+id);
    // for next request that this component is loading
    this.activatedRoute.params.subscribe(
      (params: Params) => {
       id = params.id;
       this.donnees = this.serviceBien.getBienById(+id);
      }
    );
  }

  ngOnDestroy(): void {
    alert('destruction de l\'elemenet');
  }

}
