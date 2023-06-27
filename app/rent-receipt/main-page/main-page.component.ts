import { Component, OnInit, isDevMode, HostListener } from '@angular/core';
import { environment } from '../../../environments/environment';


declare function rentReceipt(): any

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  myScriptElement: HTMLScriptElement;
  constructor() { }
  isRenderd: boolean = false;

  @HostListener('scroll', ['$event'])
  @HostListener('click', ['$event'])
  @HostListener('mousemove', ['$event'])
  @HostListener('touchstart', ['$event'])
  @HostListener('focus', ['$event'])
  onEvent(event: Event) {
    this.jsLoad()
  }

  ngOnInit(): void {

    // if (isDevMode()) {
    //   environment.hostName
    //   console.log('Development!' + environment.hostName);
    // } else {
    //   console.log('Production!' + environment.hostName);
    // }
    this.jsLoad()

  }

  jsLoad(): void {

    if (!this.isRenderd && (typeof rentReceipt == "function")) {
      rentReceipt()
      this.isRenderd = true
    }

    // let isExist = false;
    // document.querySelectorAll('script').forEach((e) => {
    //   if (e.src == environment.hostName + '/assets/js/generate-receipt.js') {
    //     isExist = true;
    //     return false;
    //   }
    // });
    // if (isExist && !this.isRenderd) {

    //   if (typeof rentReceipt == "function") {
    //     // safe to use the function
    //     console.log('======================defined')
    //     rentReceipt()
    //     this.isRenderd = true
    //   }
    //   else {
    //     console.log('function not defined')
    //   }

    // }

  }
};
