import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, AfterViewInit {
  opened = false;
  ngOnInit() {

   }
  ngAfterViewInit() {}
  constructor() { }
  openFieldPanel() {
    this.opened = !this.opened;
  }

  closed(evt) {
    this.opened = evt;
  }
}


