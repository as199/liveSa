import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BienComponent } from './bien/bien.component';
import { ListBienComponent } from './bien/list-bien/list-bien.component';
import { AddBienComponent } from './bien/add-bien/add-bien.component';
import { DetailBienComponent } from './bien/detail-bien/detail-bien.component';
import { ItemBienComponent } from './bien/list-bien/item-bien/item-bien.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './bien/jumbotron/jumbotron.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeLeftPipe } from './pipes/time-left.pipe';
import { SummerizePipe } from './pipes/summerize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReservationComponent } from './bien/reservation/reservation.component';
import { DetailsReservationComponent } from './bien/reservation/details-reservation/details-reservation.component';
import { EditeReservationComponent } from './bien/reservation/edite-reservation/edite-reservation.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { ErrorsComponent } from './errors/errors.component';
import { RegisterComponent } from './login/register/register.component';
import { TestsdComponent } from './testsd/testsd.component';

@NgModule({
  declarations: [
    AppComponent,
    BienComponent,
    ListBienComponent,
    AddBienComponent,
    DetailBienComponent,
    ItemBienComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    SeparatorPipe,
    TimeLeftPipe,
    SummerizePipe,
    FilterPipe,
    ReservationComponent,
    DetailsReservationComponent,
    EditeReservationComponent,
    Page404Component,
    LoginComponent,
    ErrorsComponent,
    RegisterComponent,
    TestsdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
