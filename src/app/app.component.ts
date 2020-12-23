import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Rahmane Ndiaye';
  ok = false;
  search = '';

  state = 'Activer';
  change(): void {
    this.ok = true;
  }

  searchThis( data: string ): void{
    this.search = data;
    console.log(data);
  }

}
