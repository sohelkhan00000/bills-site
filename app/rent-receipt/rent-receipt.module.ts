import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { RentReceiptRoutingModule } from './rent-receipt-routing.module';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RentReceiptRoutingModule
  ]
})
export class RentReceiptModule { }
