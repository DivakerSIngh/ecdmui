import { Component, OnInit } from '@angular/core';
export interface Element {
  qualification: string;
  degree: string;
  passingyear: number;
  duration: string;
  marks: string;
  subjects: string;
  university: string;
  collegeName: string;
}
export interface Element2 {
  Skill: string;
  details: string;
  date: string;
  attachments: string;
  remarks: string;
}

export interface Element3 {
  language: string;
  read: string;
  write: string;
  speak: string;
  primary: string;
}

const ELEMENT_DATA: Element[] = [
    { qualification: 'Masters', degree: 'MTech', passingyear: 2019, duration: '2 Year', marks: '80%', subjects: 'CS', university: 'IIT Bombay', collegeName: 'IIT Bombay'},
    { qualification: 'Graduation', degree: 'BTech', passingyear: 2017, duration: '4 Year', marks: '80%', subjects: 'CS', university: 'IIT Bombay', collegeName: 'IIT Bombay'},
    { qualification: '12th', degree: '10+2', passingyear: 2013, duration: '1 Year', marks: '80%', subjects: 'Science', university: 'CBSE', collegeName: 'Birla Vidya Niketan'},
    { qualification: '10th', degree: 'Board', passingyear: 2011, duration: '1 Year', marks: '80%', subjects: 'All Subjects', university: 'CBSE', collegeName: 'Gyan Bharti Public School'},
];

const ELEMENT_DATA2: Element2[] = [
  { Skill: 'JAVA', details: '-', date: 'DD/MMM/YY', attachments: '2', remarks: '-'},
  { Skill: 'Angular', details: '-', date: 'DD/MMM/YY', attachments: '2', remarks: '-'},
  { Skill: 'MSCP', details: '-', date: 'DD/MMM/YY', attachments: '2', remarks: '-'},
];
const ELEMENT_DATA3: Element3[] = [
  { language: 'English', read: 'Yes', write: 'Yes', speak: 'No', primary: 'Yes'},
  { language: 'Hindi', read: 'Yes', write: 'Yes', speak: 'No', primary: 'No'},
];

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {

  displayedColumns = ['qualification', 'degree', 'passingyear', 'duration', 'marks', 'subjects', 'university', 'collegeName'];
  displayedColumns2 = ['Skill', 'details', 'date', 'attachments', 'remarks'];
  displayedColumns3 = ['language', 'read', 'write', 'speak', 'primary'];
  educationDataSource = ELEMENT_DATA;
  technicalDataSource = ELEMENT_DATA2;
  languageDataSource  = ELEMENT_DATA3;

  constructor() { }

  ngOnInit() {
  }

}
