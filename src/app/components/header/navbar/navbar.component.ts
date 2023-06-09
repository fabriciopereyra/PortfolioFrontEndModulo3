import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogIn(): void {
    this.router.navigate(['/login']);
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  // Colapsar navbar al apretar boton
  isMenuCollapsed = true;

  //Hacer transparente navbar al subir completamente la pagina
  nav = true;
  @HostListener('document:scroll')
  scrollfunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.nav = false;
    } else {
      this.nav = true;
    }
  }
}
