import { Component, OnInit } from '@angular/core';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { EasyDialog } from '@shared/components/easy-dialog/easy-dialog';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { BreakpointObserver, BreakpointState  } from '@angular/cdk/layout';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  sidenavWidth = 15;
  ngStyle: string;
  public show: boolean = true;
  public buttonName: any = 'Show';
  icon = 'chevron_left';

  constructor(private dialog: MatDialog, public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 959px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 500px or over!');
        } else {
          console.log('Viewport is getting smaller!');
        }
      });
  }
  increase() {
    this.sidenavWidth = 1;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

  openDialog() {
    const dialogRef = this.dialog.open(FileUploadComponent, {
      data: {
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        const a = document.createElement('a');
        a.click();
        a.remove();
      }
    });

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
