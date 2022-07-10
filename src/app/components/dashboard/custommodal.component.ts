import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custommodal',
  templateUrl: './custommodal.component.html',
  styleUrls: ['./custommodal.component.scss']
})
export class CustommodalComponent implements OnInit {
  @Output() closePanel: EventEmitter<boolean> = new EventEmitter();
  public isMenuList:boolean = false;
  public isSettingList:boolean= false;
  public isLanguageSettingList:boolean = false;
  isOpened:boolean=false;
  selectedValue:string='Select Form Control';
  constructor() { }

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
//this.selectedValue=this.translate.transform(val);
this.isMenuList=false;


  }
  openSettingList(){
   this.isSettingList = this.isSettingList ? false: true;
  }
  openLanguageSettingList(){

    this.isLanguageSettingList =  this.isLanguageSettingList ? false: true;

  }

}
