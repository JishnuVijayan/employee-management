import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Irole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleList: Irole[] = [];
  http = inject(HttpClient); //instance of the HttpClient service

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe((res: any) => {
        this.roleList = res.data;
      });
  }

  // firstName: string = 'Hello';
  // secondName: string = 'World';
  // currentDate: Date = new Date();
  // bool: boolean = false;
  // selectedState: string = '';

  // showWelcomeMessage() {
  //   alert('Welcome');
  // }
  // showMessage(message: string) {
  //   alert(message);
  // }
}
