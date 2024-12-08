import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MasterComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'employee-management';
}
