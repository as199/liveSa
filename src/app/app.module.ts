import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
import {FormsModule} from '@angular/forms';

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
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
