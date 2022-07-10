import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { MenuService } from './menu.service';

@Injectable()
export class StartupService {
  constructor(private menuService: MenuService, private http: HttpClient) {}

  data: any = {};
  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('assets/data/menu.json')
        .pipe(
          catchError(res => {
            resolve();
            return res;
          })
        )
        .subscribe(
          (res: any) => {
            this.menuService.set(res.menu);
          },
          () => {},
          () => {
            resolve();
          }
        );
    });
  }

  use(lang: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const langPath = `assets/language/${lang || 'en'}.json`;
      this.http
        .get(langPath)
        .pipe(
          catchError(res => {
            resolve();
            return res;
          })
        )
        .subscribe(
          (res: any) => {
              this.data = Object.assign({}, res || {});
              resolve(this.data.json);
          },
          () => {},
          () => {
            resolve();
          }
        );
    });
  }
}
