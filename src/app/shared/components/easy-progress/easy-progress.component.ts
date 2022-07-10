import { Component, OnInit, Input, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'easy-progress',
  host: {
    class: 'matero-easy-progress',
  },
  templateUrl: './easy-progress.component.html',
  styleUrls: ['./easy-progress.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EasyProgressComponent implements OnInit {
  @Input() value = 0;
  @Input() foreground = '#39b54a';

  @HostBinding('style.height')
  @Input()
  height = '5px';

  @HostBinding('style.background-color')
  @Input()
  background = '#e0e0e0';

  constructor() {}

  ngOnInit() {}
}
