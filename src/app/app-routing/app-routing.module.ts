import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListBienComponent} from "../bien/list-bien/list-bien.component";
import {AddBienComponent} from "../bien/add-bien/add-bien.component";
import {DetailBienComponent} from "../bien/detail-bien/detail-bien.component";
import {ReservationComponent} from "../bien/reservation/reservation.component";
import {EditeReservationComponent} from "../bien/reservation/edite-reservation/edite-reservation.component";
import {DetailsReservationComponent} from "../bien/reservation/details-reservation/details-reservation.component";
import {Page404Component} from "../page404/page404.component";
import {AuthGuardService} from "../auth-guard.service";
import {LoginComponent} from "../login/login.component";
import {ErrorsComponent} from "../errors/errors.component";
import {BienResolverService} from "../bien/service/bien-resolver.service";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/biens', pathMatch: 'full' },
  { path: 'biens', component: ListBienComponent },
  { path: 'biens/add', component: AddBienComponent },
  { path: 'biens/:id', component: DetailBienComponent ,resolve:{bien:BienResolverService}},

  { path: 'reservations', component: ReservationComponent,
    //canActivate:[AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      { path: ':id', component: DetailsReservationComponent },
      { path: ':id/edit', component: EditeReservationComponent },
    ]
  },
  { path: 'not-found', component: ErrorsComponent, data: {message:'Page introuvable'} },
  { path: '**', component: Page404Component },

];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
