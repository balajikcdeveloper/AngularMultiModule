import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { DatetimeUtilService } from './service/datetime-util.service';
import { FeaturesService } from './service/features.service';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import { NoDataFoundComponent } from './component/no-data-found/no-data-found.component';
import { ForbiddenPageComponent } from './component/forbidden-page/forbidden-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { PageUnderDevComponent } from './component/micro/page-under-development.component';

@NgModule({
  declarations: [CustomerDetailsComponent, ConfirmationDialogComponent, NoDataFoundComponent, ForbiddenPageComponent, PageUnderDevComponent],
  imports: [
    CommonModule, MaterialModule,FlexLayoutModule
  ],
  exports:[CustomerDetailsComponent, ConfirmationDialogComponent, NoDataFoundComponent,ForbiddenPageComponent,PageUnderDevComponent],
  entryComponents: [ConfirmationDialogComponent]
})

export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [DatetimeUtilService, FeaturesService]
    };
  }

}
