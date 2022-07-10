import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { PersonaldetailsComponent } from './personaldetails.component';
import { EmployeementDetailsComponent } from './employeement-details.component';
import { QualificationComponent } from './qualification.component';
const routes: Routes = [
  
  {path:'',redirectTo:'employee',pathMatch:'full'},
  
  { path: 'employee',
  component: EmployeeComponent,
  children: [
    { path: '', redirectTo: 'personaldetails', pathMatch: 'full' },
    {
      path: 'personaldetails',
      component: PersonaldetailsComponent,
      data: { title: 'Personal Details' },
    },
    {
      path: 'employmentdetails',
      component: EmployeementDetailsComponent,
      data: { title: 'Employment Details' },
    },
    {
      path: 'qualification',
      component: QualificationComponent,
      data: { title: 'Qualification Details' },
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
