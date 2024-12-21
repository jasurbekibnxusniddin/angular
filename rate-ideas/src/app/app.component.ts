import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styles: [`
    h1 {
      color: red;
    }`]
})

export class AppComponent {
  title = 'rate-ideas';
}
