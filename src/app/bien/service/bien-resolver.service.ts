import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Observable } from 'rxjs';
import {Bien} from "../list-bien/bien.model";
import {BienService} from "../bien.service";

@Injectable({
  providedIn: 'root'
})
export class BienResolverService implements Resolve<Bien>{

  constructor(private bienservice: BienService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bien> | Promise<Bien> | Bien {
    return this.bienservice.getBienById(+route.params['id']);
  }
}
