import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  firstName: string = 'Hello';
  secondName: string = 'World';
  currentDate: Date = new Date();
  bool: boolean = false;
}
