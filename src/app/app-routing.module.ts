import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/sessions/login/login.component';
import { RegisterComponent } from './components/sessions/register/register.component';
import { AdminLayoutComponent } from './theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './theme/auth-layout/auth-layout.component';
import { ConfirmDialogComponent } from './components/dashboard/confirm-dialog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '@shared';
import { CustommodalComponent } from './components/dashboard/custommodal.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard', titleI18n: 'dashboard' },
      },
      {
        path: 'configuration',
        loadChildren: () => import('./components/configuration/employee/employee.module').then(m => m.ConfigurationModule),
        data: { title: 'Configuration', titleI18n: 'Configuration' },
      },
      {
        path: 'forms',
        loadChildren: () => import('./components/forms/employee/entries.module').then(m => m.EntriesModule),
        data: { title: 'Forms', titleI18n: 'Forms' },
      },
      {
        path: 'views',
        loadChildren: () => import('./components/views/employee/views.module').then(m => m.ViewsModule),
        data: { title: 'Views', titleI18n: 'Forms' },
      },
      {
        path: 'sessions',
        loadChildren: () => import('./components/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Sessions', titleI18n: 'sessions' },
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login', titleI18n: 'login' } },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register', titleI18n: 'register' },
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];


const COMPONENTS = [DashboardComponent, LoginComponent, RegisterComponent, ConfirmDialogComponent, CustommodalComponent];
const COMPONENTS_DYNAMIC = [ConfirmDialogComponent];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
    SharedModule
    
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [RouterModule]
})
export class AppRoutingModule {}
