import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  sidenavWidth = 15;
  ngStyle: string;
  public show: boolean = true;
  public buttonName: any = 'Show';
  icon = 'chevron_left';
  constructor() { }

  ngOnInit() {
  }
  sidenavToggle() {
    this.show = !this.show;
    if (this.show) {
      this.sidenavWidth = 15;
      this.buttonName = "Hide";
      this.icon ="chevron_left";
    }
    else {
      this.sidenavWidth = 4;
      this.buttonName = "Show";
      this.icon = "chevron_right";
    }
  }
}
