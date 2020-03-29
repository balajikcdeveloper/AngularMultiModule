import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../shared/material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,MaterialModule,FlexLayoutModule
  ],
  exports: [HeaderComponent,SidenavComponent]
})
export class LayoutModule { }
