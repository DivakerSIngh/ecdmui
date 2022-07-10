import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { PersonaldetailsComponent } from './personaldetails.component';
import { EmploymentDetailsComponent } from './employment-details.component';
import { QualificationComponent } from './qualification.component';
import { ExperienceComponent } from './experience.component';
import { SalaryBreakupComponent } from './salary-breakup.component';
import { AssetsComponent } from './assets.component';
import { EmployeeIdentityComponent } from './employee-identity.component';
import { FamilyDetailsComponent } from './family-details.component';
import { OtherInformationComponent } from './other-information.component';
import { SummaryComponent } from './summary.component';


@NgModule({
  declarations: [ViewsComponent, PersonaldetailsComponent, EmploymentDetailsComponent, QualificationComponent, ExperienceComponent, SalaryBreakupComponent, AssetsComponent, EmployeeIdentityComponent, FamilyDetailsComponent, OtherInformationComponent, SummaryComponent],
  imports: [
    SharedModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
