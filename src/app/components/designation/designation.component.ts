import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel, Idesignation } from '../../model/interface/role';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList: Idesignation[] = [];
  masterService = inject(MasterService);

  isLoaded: boolean = true;

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      (result: APIResponseModel) => {
        this.designationList = result.data;
        this.isLoaded = false;
      },
      (error) => {
        alert('API Error');
        this.isLoaded = false;
      }
    );
  }
}
