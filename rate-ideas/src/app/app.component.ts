import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styles: [`
    h1 {
      color: black;
    }`]
})

export class AppComponent {
  title = 'rate-ideas';
}
