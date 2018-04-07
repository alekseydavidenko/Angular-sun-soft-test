import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AssetsService } from './shared/assets/assets.service';
import { AccountService } from './shared/account/account.service';

import { GatePipe } from './shared/pipes/gate.pipe';
import { AccountType } from './shared/pipes/account-type.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GatePipe,
    AccountType
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AssetsService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
