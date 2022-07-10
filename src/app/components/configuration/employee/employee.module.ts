import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ConfigurationRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { PersonaldetailsComponent } from './personaldetails.component';
import { EmployeementDetailsComponent } from './employeement-details.component';
import { QualificationComponent } from './qualification.component';
import { AddnewfieldComponent } from './addnewfield.component';

@NgModule({
  declarations: [EmployeeComponent, PersonaldetailsComponent, EmployeementDetailsComponent, QualificationComponent, AddnewfieldComponent],
  imports: [
    SharedModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
