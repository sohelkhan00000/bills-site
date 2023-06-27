import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { MainPageComponent } from './rent-receipt/main-page/main-page.component';
//import { FuelBillMainComponent } from './fuel-bills/fuel-bill-main/fuel-bill-main.component';


import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'fuel-bills'
    , loadChildren: () => import('./fuel-bills/fuel-bills.module').then(m => m.FuelBillsModule)
    //,component: FuelBillMainComponent
  },
  {
    path: 'rent-receipt'
    , loadChildren: () => import('./rent-receipt/rent-receipt.module').then(m => m.RentReceiptModule)
    //,component: MainPageComponent
  }
  ,{
    path: '',
    redirectTo: 'rent-receipt', pathMatch: 'full'
   // , loadChildren: () => import('./rent-receipt/rent-receipt.module').then(m => m.RentReceiptModule)
    //,component: MainPageComponent
  },
//   { path: 'rent-receipt', component: MainPageComponent },
//  { path: '', component: MainPageComponent },
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]

})


export class AppModule { }
