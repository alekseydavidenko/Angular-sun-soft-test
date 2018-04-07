import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Account } from './account';

@Injectable()
export class AccountService {
  private url = 'http://localhost:2403/account';

  constructor (private http: Http) {}

  public getAccount(): Observable<Account[]> {
    const account = this.http.get(this.url)
      .map(this.extract)
      .catch(this.error);
    return account;

  }
  public getSelectGate() {
    const items = ['all'];
    const account = this.http.get(this.url)
      .map(this.extract)
      .catch(this.error);

    account.forEach((index) => {
      for (let i = 0; i < index.length; i += 1) {
        if (items.indexOf(index[i].gate) === -1) {
          items.push(index[i].gate);
        }
      }
    });
    return items;
  }
  public getSelectAccountType() {
    const items = ['all'];
    const account = this.http.get(this.url)
      .map(this.extract)
      .catch(this.error);

    account.forEach((index) => {
      for (let i = 0; i < index.length; i += 1) {
        if (items.indexOf(index[i].accountType) === -1) {
          items.push(index[i].accountType);
        }
      }
    });
    return items;
  }

  private extract(response: Response) {
    const account: Account = response.json();
    return account;
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
