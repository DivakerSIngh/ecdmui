import { Component, OnInit } from '@angular/core';

export interface Element {
  name: string;
  relation: string;
  mobile: number;
  address: string;
  position: number;
}
const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Ronald Carroll', relation: 'Brother', mobile: 7065172921, address: 'Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet, consetetur'},
];

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})

export class PersonaldetailsComponent implements OnInit {
  selectedUnits: string;
  selectedCategory: string;
  selectedTitles: string;
  selectedBlood: string;
  selectedType: string;
  selectedstatus: string;
  selectedNationality: string;

  url = '';
  selectedGender = 'Male';
  genderOptions = ['Male', 'Female', 'Other'];

  units = [
    { value: 'mind', label: 'MIND' },
    { value: 'motherson', label: 'Motherson Group' }
  ];

  categories = [
    { value: 'mind', label: 'MIND' },
    { value: 'motherson', label: 'Motherson Group' }
  ];

  titles = [
    { value: 'mr', label: 'Mr' },
    { value: 'ms', label: 'Ms' },
  ];

  bloods = [
    { value: 'o', label: '0+' },
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'ab', label: 'AB+' },
  ];

  types = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ];

  maritalStatus = [
    { value: 'married', label: 'Married' },
    { value: 'unmarried', label: 'Unmarried' },
  ];

  nationalitiesStatus = [
    { value: 'indian', label: 'Indian' },
    { value: 'non-Indian', label: 'Non-Indian' },
  ];

  displayedColumns = ['position', 'name', 'relation', 'mobile', 'address'];

  emergencyDataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }
  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        //this.url = event.target.result;
      }
    }
  }

}
