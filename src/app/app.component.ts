import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import './rx-js.operators';

import { Assets } from './shared/assets/assets';
import { Account } from './shared/account/account';

import { AssetsService } from './shared/assets/assets.service';
import { AccountService} from './shared/account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public radioPosition = false;
  public assets: Assets[];
  public accounts: Account[];
  public errorMessage: String;

  public selectGate = [];
  public selectedGate = 'all';

  public selectAccountType = [];
  public selectedAccountType = 'all';

  constructor(
    @Inject(forwardRef(() => AssetsService))
    public assetsService: AssetsService,
    @Inject(forwardRef(() => AccountService))
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getAssets();
    this.getAccount();
    this.selectGate = this.accountService.getSelectGate();
    this.selectAccountType = this.accountService.getSelectAccountType();
  }

  private getAssets() {
    this.assetsService.getAssets().subscribe(
      result => this.assets = result,
      error => this.errorMessage = error
    );
  }
  private getAccount() {
    this.accountService.getAccount().subscribe(
      result => this.accounts = result,
      error => this.errorMessage = error
    );
  }
  public radioCange() {
    if (!this.radioPosition) {
      this.radioPosition = true;
    } else {
      this.radioPosition = false;
    }
  }
}
