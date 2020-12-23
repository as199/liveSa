import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BienComponent} from './bien/bien.component';
import {AddBienComponent} from './bien/add-bien/add-bien.component';
import {DetailBienComponent} from './bien/detail-bien/detail-bien.component';
import {ListBienComponent} from './bien/list-bien/list-bien.component';

const routes: Routes = [
  { path: '', redirectTo: '/biens', pathMatch: 'full' },
  { path: 'biens', component: ListBienComponent },
  { path: 'biens/add', component: AddBienComponent },
  { path: 'biens/:id', component: DetailBienComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
