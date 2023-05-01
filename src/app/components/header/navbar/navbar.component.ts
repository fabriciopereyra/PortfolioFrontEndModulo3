import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  // Colapsar navbar al apretar boton  
  isMenuCollapsed = true;

  //Hacer transparente navbar al subir completamente la pagina
  nav = true;
  @HostListener("document:scroll")
  scrollfunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.nav = false;
    } else {
      this.nav = true;
    }
  }
}
