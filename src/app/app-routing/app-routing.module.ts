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

const routes: Routes = [
  { path: '', redirectTo: '/biens', pathMatch: 'full' },
  { path: 'biens', component: ListBienComponent },
  { path: 'biens/add', component: AddBienComponent },
  { path: 'biens/:id', component: DetailBienComponent },

  { path: 'reservations', component: ReservationComponent,
    children: [
      { path: ':id', component: DetailsReservationComponent },
      { path: ':id/edit', component: EditeReservationComponent },
    ]
  },
  { path: '**', component: Page404Component },

];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
