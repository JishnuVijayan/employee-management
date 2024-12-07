import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  firstName: string = 'Hello';
  secondName: string = 'World';
  currentDate: Date = new Date();
  bool: boolean = false;
  selectedState: string = '';

  showWelcomeMessage() {
    alert('Welcome');
  }
  showMessage(message: string) {
    alert(message);
  }
}


