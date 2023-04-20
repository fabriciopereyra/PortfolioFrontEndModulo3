import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SocialComponent } from './components/main/social/social.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { AboutmeComponent } from './components/main/aboutme/aboutme.component';
import { ExperienceComponent } from './components/main/experience/experience.component';
import { EducationComponent } from './components/main/education/education.component';
import { SkillComponent } from './components/main/skill/skill.component';
import { ProjectComponent } from './components/main/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioService } from './services/portfolio.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { ModalComponent } from './components/header/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SocialComponent,
    HeroComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ModalComponent],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
