import { Component } from '@angular/core';

@Component({
  selector: 'sigia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  toggle() {
    const main:HTMLElement  | any = document.querySelector("#main_")
    const asidebar:HTMLElement  | any = document.querySelector("#asidebar")


    
    if(main && asidebar){
      let asideLeft:string | any =  asidebar.style.left
      let mainLeft:string | any =  main.style.marginLeft
      if(asideLeft=="" || asideLeft=="0px"){
        asideLeft =  "-300px";
        mainLeft =  "0px"
      }else{
        asideLeft =  "0px";
        mainLeft =  "300px"
      }
      asidebar.style.left=asideLeft;
      main.style.marginLeft=mainLeft;


    }
   

  }
}
