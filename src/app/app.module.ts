import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ModalComponent } from './components/modal/modal.component';
import { SocialComponent } from './components/main/social/social.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { AboutmeComponent } from './components/main/aboutme/aboutme.component';
import { ExperienceComponent } from './components/main/experience/experience.component';
import { EducationComponent } from './components/main/education/education.component';
import { SkillComponent } from './components/main/skill/skill.component';
import { ProjectComponent } from './components/main/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArgentinaProgramaImgComponent } from './components/header/argentina-programa-img/argentina-programa-img.component';
import { PortfolioService } from './services/portfolio.service';
import { NavbarButtonComponent } from './components/header/navbar-button/navbar-button.component';
import { NavbarOptionListComponent } from './components/header/navbar-option-list/navbar-option-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ModalComponent,
    SocialComponent,
    HeroComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent,
    FooterComponent,
    ArgentinaProgramaImgComponent,
    NavbarButtonComponent,
    NavbarOptionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
