import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';
import { AppComponent } from './app.component';
import { StartupService } from '@core';
import { FusionChartsModule } from 'angular-fusioncharts';


// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import * as World from 'fusioncharts/maps/fusioncharts.world';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'; 


// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionMaps, World, FusionTheme);

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}
export function StartupLanguageServiceFactory(startupService: StartupService) {
  return () => startupService.use('en');
}


import { FormlyModule } from '@ngx-formly/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    FusionChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ThemeModule,
    AppRoutingModule,
    FormlyModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupLanguageServiceFactory,
      deps: [StartupService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
 