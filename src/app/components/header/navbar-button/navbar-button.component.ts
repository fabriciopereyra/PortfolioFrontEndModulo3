import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css']
})
export class NavbarButtonComponent {

  firstTime: boolean = false;
  name = 'Angular';

  menuState:string = 'out';

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.firstTime = true;
  }

  closeMenu(){
    console.log(this.menuState, this.firstTime);
    if( this.menuState === 'in' && !this.firstTime ){
     this.menuState = 'out' ;
    }
     this.firstTime = false;
  }
}