import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { FooterComponent } from './footer/footer.component';
import { Test2Component } from './test 2/test2/test2.component';
import { MainComponent } from './test 2/main/main.component';
import { CardsComponent } from './test 2/cards/cards.component';
import { NextCardsComponent } from './test 2/next-cards/next-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProtfolioComponent,
    FooterComponent,
    Test2Component,
    MainComponent,
    CardsComponent,
    NextCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
