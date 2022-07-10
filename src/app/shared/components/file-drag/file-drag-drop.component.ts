import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-file-drag-drop',
  templateUrl: './file-drag-drop.component.html',
  styles: []
})
export class FileDragDropComponent {

  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
}
