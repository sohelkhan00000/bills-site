import { Component, OnInit, HostListener, isDevMode } from '@angular/core';
import { environment } from '../../../environments/environment';

declare function fuelBills(): any
@Component({
  selector: 'app-fuel-bill-main',
  templateUrl: './fuel-bill-main.component.html',
  styleUrls: ['../../../assets/style/fuel-receipt-critical.css'],

})
export class FuelBillMainComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  isRenderd: boolean = false;
  constructor() { }

  @HostListener('scroll', ['$event'])
  @HostListener('click', ['$event'])
  @HostListener('mousemove', ['$event'])
  @HostListener('touchstart', ['$event'])
  @HostListener('focus', ['$event'])
  onEvent(event: Event) {
    this.jsLoad()
  }

  ngOnInit(): void {
    this.jsLoad()
  }

  jsLoad(): void {

    if (!this.isRenderd && (typeof fuelBills == "function")) {

      fuelBills()
      this.isRenderd = true

    }

  }
}
