import { Component, OnInit } from '@angular/core';
export interface Element {
  From: string;
  to: string;
  managercode: number;
  type: string;
}
const ELEMENT_DATA: Element[] = [
    { From: 'DD/MMM/YYYY', to: 'DD/MMM/YYYY', managercode: 234, type: 'Delivery Head'},
    { From: 'DD/MMM/YYYY', to: 'DD/MMM/YYYY', managercode: 235, type: 'Functional Head'},
    { From: 'DD/MMM/YYYY', to: 'DD/MMM/YYYY', managercode: 236, type: 'Account Head'},
];

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.scss']
})
export class EmploymentDetailsComponent implements OnInit {
  displayedColumns = ['From', 'to', 'managercode', 'type'];

  employeeDataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
