import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkedAccountsComponent } from './linked-accounts/linked-accounts.component';
import { PageUnderDevComponent } from '../shared/component/micro/page-under-development.component';

const routes: Routes = [
  {
    path: '',
    component: PageUnderDevComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
