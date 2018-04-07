import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Assets } from './assets';

@Injectable()
export class AssetsService {
  private url = 'http://localhost:2403/assets';

  constructor (private http: Http) {}

  public getAssets(): Observable<Assets[]> {
    const assets = this.http.get(this.url)
      .map(this.extract)
      .catch(this.error);
    return assets;

  }

  private extract(response: Response) {
    const assets: Assets = response.json();
    return assets;
  }

  private error(error: any, cought: Observable<any>): any {
    let message = '';

    if (error instanceof Response) {
      const errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`;
    } else {
      message = error.message ? error.message : error.toString();
    }

    return Observable.throw(message);
  }
}
