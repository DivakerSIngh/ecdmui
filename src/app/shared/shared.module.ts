import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NgxPopperModule } from 'ngx-popper';
import { TranslatePipe } from './pipes/translate.pipe';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ErrorCodeComponent } from './components/error-code/error-code.component';
import { Text3dComponent } from './components/text3d/text3d.component';
import { EasyProgressComponent } from './components/easy-progress/easy-progress.component';
import { EasyDialogComponent } from './components/easy-dialog/easy-dialog.component';

import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { FileDragDropComponent } from './components/file-drag/file-drag-drop.component';
import { DragDropDirective } from './components/file-drag/drag-drop.directive';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PagenavComponent } from './pagenav/pagenav.component';
  const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true
  };
const THIRD_MODULES = [
  MaterialModule,
  FlexLayoutModule,
  NgProgressModule,
  NgProgressRouterModule,
  NgSelectModule,
  FormlyModule,
  FormlyMaterialModule,
  NgxPopperModule,
  PerfectScrollbarModule
];
const COMPONENTS = [
  BreadcrumbComponent,
  PageHeaderComponent,
  ErrorCodeComponent,
  Text3dComponent,
  EasyProgressComponent,
  EasyDialogComponent,
  FileDragDropComponent
];
const COMPONENTS_DYNAMIC = [EasyDialogComponent, FileUploadComponent];
const DIRECTIVES = [];
const PIPES = [TranslatePipe];

@NgModule({
 declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES, ...COMPONENTS_DYNAMIC, FileDragDropComponent, DragDropDirective, FileUploadComponent, PagenavComponent ] ,
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...THIRD_MODULES],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRD_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class SharedModule {}
