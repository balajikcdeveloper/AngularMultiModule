import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenPageComponent } from './shared/component/forbidden-page/forbidden-page.component';


const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () => import('./accounts/accounts.module').then(module => module.AccountsModule)
  },
  {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full'
  },{
    path: '**',
    component: ForbiddenPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
