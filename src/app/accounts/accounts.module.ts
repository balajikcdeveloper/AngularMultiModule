import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
    SharedModule.forRoot()
  ]
})
export class AccountsModule { }
