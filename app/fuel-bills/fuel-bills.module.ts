import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelBillsRoutingModule } from './fuel-bills-routing.module';
import { FuelBillMainComponent } from './fuel-bill-main/fuel-bill-main.component';


@NgModule({
  declarations: [FuelBillMainComponent],
  imports: [
    CommonModule,
    FuelBillsRoutingModule
  ]
})
export class FuelBillsModule { }
