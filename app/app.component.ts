import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
})
export class AppComponent {

  myScriptElement: HTMLScriptElement;
   constructor(){
      
      this.myScriptElement = document.createElement("script");
      this.myScriptElement.src = "../assets/js/main-critical.js";
      document.body.appendChild(this.myScriptElement);
   }
}
