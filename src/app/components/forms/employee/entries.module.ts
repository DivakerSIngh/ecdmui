import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryComponent } from './entry.component';
import { PersonaldetailsComponent } from './personaldetails.component';
import { EmploymentDetailsComponent } from './employment-details.component';
import { QualificationComponent } from './qualification.component';
import { ExperienceComponent } from './experience.component';
import { SalaryBreakupComponent } from './salary-breakup.component';
import { AssetsComponent } from './assets.component';
import { EmployeeIdentityComponent } from './employee-identity.component';
import { FamilyDetailsComponent } from './family-details.component';
import { OtherInformationComponent } from './other-information.component';


@NgModule({
  declarations: [EntryComponent, PersonaldetailsComponent, EmploymentDetailsComponent, QualificationComponent, ExperienceComponent, SalaryBreakupComponent, AssetsComponent, EmployeeIdentityComponent, FamilyDetailsComponent, OtherInformationComponent],
  imports: [
    SharedModule,
    EntriesRoutingModule
  ]
})
export class EntriesModule { }
