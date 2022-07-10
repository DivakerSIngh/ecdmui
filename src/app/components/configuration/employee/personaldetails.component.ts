import {Component, ElementRef, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import {MatTable} from '@angular/material/table';
import { identifierModuleUrl } from '@angular/compiler';

export interface Element {
  checked: boolean;
  checkedA: boolean;
  name: string;
  sequence: number;
  position: number;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, sequence: 1, name: 'Title', checked: true, checkedA: true},
  { position: 2, sequence: 2, name: 'First Name', checked: true, checkedA: false},
  { position: 3, sequence: 3, name: 'Middle Name', checked: false, checkedA: true},
  { position: 4, sequence: 4, name: 'Last Name', checked: true, checkedA: false},
  { position: 5, sequence: 5, name: 'Legal Name', checked: false, checkedA: true},
  { position: 6, sequence: 6, name: 'Custom Field Added ', checked: false, checkedA: false}
];

const PERSONAL_DETAILS: Element[] = [
  { position: 1, sequence: 1, name: 'Date of Birth ', checked: true, checkedA: true},
  { position: 2, sequence: 2, name: 'Gender', checked: true, checkedA: false},
  { position: 3, sequence: 3, name: 'Father Name', checked: false, checkedA: true},
  { position: 4, sequence: 4, name: 'Blood Group', checked: true, checkedA: false},
  { position: 5, sequence: 5, name: 'Physical Status', checked: false, checkedA: true},
  { position: 6, sequence: 6, name: 'Vegetarian/ Non Veg', checked: false, checkedA: false},
  { position: 7, sequence: 7, name: 'Marital Status', checked: false, checkedA: false},
  { position: 8, sequence: 8, name: 'Wedding Anniversary Date', checked: false, checkedA: false},
  { position: 9, sequence: 9, name: 'Nationality', checked: false, checkedA: false},
  { position: 10, sequence: 10, name: 'Email ID', checked: false, checkedA: false},
  { position: 11, sequence: 11, name: 'Custom Field Added', checked: false, checkedA: false}
];

const CONTACT_INFORMATION: Element[] = [
  { position: 1, sequence: 1, name: 'Correspondence Address', checked: true, checkedA: true},
  { position: 2, sequence: 2, name: 'House No.', checked: true, checkedA: false},
  { position: 3, sequence: 3, name: 'Street Area 1', checked: false, checkedA: true},
  { position: 4, sequence: 4, name: 'Street Area 2', checked: true, checkedA: false},
  { position: 5, sequence: 5, name: 'Country', checked: false, checkedA: true},
  { position: 6, sequence: 6, name: 'State', checked: false, checkedA: false},
  { position: 7, sequence: 7, name: 'City', checked: false, checkedA: false},
  { position: 8, sequence: 8, name: 'Zip Code', checked: false, checkedA: false},
  { position: 9, sequence: 9, name: 'Permanent Address', checked: false, checkedA: false},
  { position: 10, sequence: 10, name: 'House No.', checked: true, checkedA: false},
  { position: 11, sequence: 11, name: 'Street / Area 1', checked: false, checkedA: false},
  { position: 12, sequence: 12, name: 'Street / Area 2', checked: false, checkedA: false},
  { position: 13, sequence: 13, name: 'Country', checked: false, checkedA: false},
  { position: 14, sequence: 14, name: 'State', checked: false, checkedA: false},
  { position: 15, sequence: 15, name: 'City', checked: false, checkedA: false},
  { position: 16, sequence: 16, name: 'Zip Code', checked: false, checkedA: false},
  { position: 17, sequence: 17, name: 'Mobile No.', checked: false, checkedA: false},
  { position: 18, sequence: 18, name: 'Residence Phone No.', checked: false, checkedA: false},
  { position: 19, sequence: 19, name: 'Permanent Phone No.', checked: false, checkedA: false}

];

const EMERGENCY_CONTACT: Element[] = [
  { position: 1, sequence: 1, name: 'Contact Name', checked: true, checkedA: true},
  { position: 2, sequence: 2, name: 'Relationship ', checked: true, checkedA: false},
  { position: 3, sequence: 3, name: 'Mobile Number', checked: false, checkedA: true},
  { position: 4, sequence: 4, name: 'Address', checked: true, checkedA: false}

];

const BACKGROUND_CHECK: Element[] = [
  { position: 1, sequence: 1, name: 'Verification Status', checked: true, checkedA: true},
  { position: 2, sequence: 2, name: 'Verification Completed on', checked: true, checkedA: false},
  { position: 3, sequence: 3, name: 'Agency Name', checked: false, checkedA: true},
  { position: 4, sequence: 4, name: 'Cost', checked: true, checkedA: false},
  { position: 5, sequence: 5, name: 'Remarks', checked: true, checkedA: false}  
];


@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})

export class PersonaldetailsComponent {
  checked = true;
  opened = false;
  @ViewChild('table', { static: false}) table: MatTable<Element>;
  @ViewChild('table2', { static: false}) table2: MatTable<Element>;
  @ViewChild('table3', { static: false}) table3: MatTable<Element>;
  @ViewChild('table4', { static: false}) table4: MatTable<Element>;
  @ViewChild('table5', { static: false}) table5: MatTable<Element>;

  displayedColumns = ['position', 'sequence', 'name', 'checked', 'checked1'];
  displayedPersonalDetails = ['position', 'sequence', 'name', 'checked', 'checked1'];
  displayedContactInformation = ['position', 'sequence', 'name', 'checked', 'checked1'];
  displayedEmergencyContact = ['position', 'sequence', 'name', 'checked', 'checked1'];
  displayedBackgroundCheck = ['position', 'sequence', 'name', 'checked', 'checked1'];

  dataSource = ELEMENT_DATA;
  dataSource2 = PERSONAL_DETAILS;
  dataSource3 = CONTACT_INFORMATION;
  dataSource4 = EMERGENCY_CONTACT;
  dataSource5 =  BACKGROUND_CHECK;

  dropTable(event: CdkDragDrop<Element[]>, ds, tableName) {
    const prevIndex = ds.findIndex((d) => d === event.item.data);
    moveItemInArray(ds, prevIndex, event.currentIndex);
    tableName.renderRows();
  }

  openFieldPanel() {
    this.opened = !this.opened;
  }

  closed(evt) {
    this.opened = evt;
  }
}
