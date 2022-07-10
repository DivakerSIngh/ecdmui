import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'app-addnewfield',
  templateUrl: './addnewfield.component.html',
  styleUrls: ['./addnewfield.component.scss'],
  providers:[TranslatePipe]
})
export class AddnewfieldComponent implements OnInit {
  selectedVal: string;
  options = [
    { value: 'SpecificLength', label: 'Specific Length' },
    { value: 'MaxLength', label: 'Max Length' },
  ];
  public isMenuList:boolean = false;
  public isSettingList:boolean= false;
  public isLanguageSettingList:boolean = false;

  @Output() closePanel: EventEmitter<boolean> = new EventEmitter();
  constructor(private translate: TranslatePipe) { }
  isOpened:boolean=false;
  selectedValue:string='Select Form Control';
  ngOnInit() {
  }

  closed() {
    this.closePanel.emit(false);
  }
  openMenuList() {
    this.isMenuList = this.isMenuList ? false : true;
  }

  add(){
    
  this.isOpened=true;

  }
  onSelect(val){
this.selectedValue=this.translate.transform(val);
this.isMenuList=false;


  }
  openSettingList(){
   this.isSettingList = this.isSettingList ? false: true;
  }
  openLanguageSettingList(){

    this.isLanguageSettingList =  this.isLanguageSettingList ? false: true;

  }


}
