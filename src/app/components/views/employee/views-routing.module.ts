import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [
  {path: '', redirectTo: 'employee', pathMatch: 'full'},

  { path: 'employee',
  component: ViewsComponent,
  children: [
    { path: '', redirectTo: 'summary', pathMatch: 'full' },
    {
      path: 'summary',
      component: SummaryComponent,
      data: { title: 'Summary' },
    },
    {
      path: 'personaldetails',
      component: PersonaldetailsComponent,
      data: { title: 'Personal Details' },
    },
    {
      path: 'employmentdetails',
      component: EmploymentDetailsComponent,
      data: { title: 'Employment Details' },
    },
    {
      path: 'qualification',
      component: QualificationComponent,
      data: { title: 'Qualification Details' },
    },
    {
      path: 'experience',
      component: ExperienceComponent,
      data: { title: 'Experience' },
    },
    {
      path: 'salary-breakup',
      component: SalaryBreakupComponent,
      data: { title: 'Salary Breakup' },
    },
    {
      path: 'assets',
      component: AssetsComponent,
      data: { title: 'Assets' },
    },
    {
      path: 'employee-identity',
      component: EmployeeIdentityComponent,
      data: { title: 'Employee Identity' },
    },
    {
      path: 'family-details',
      component: FamilyDetailsComponent,
      data: { title: 'Family Details' },
    },
    {
      path: 'otherInformation',
      component: OtherInformationComponent,
      data: { title: 'Other Information' },
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
