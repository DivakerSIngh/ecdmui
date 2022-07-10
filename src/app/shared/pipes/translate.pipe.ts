import { Pipe, PipeTransform } from '@angular/core';
import { StartupService } from '@core/index';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: StartupService) {}
  transform(key: any): any {
    return this.translate.data[key] || key;
  }
}