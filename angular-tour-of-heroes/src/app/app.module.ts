import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroComponent } from './hero/hero.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboarComponent } from './dashboar/dashboar.component';

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent,HeroesComponent, HeroDetailComponent, MessagesComponent, HeroComponent,DashboarComponent],
  imports: [BrowserModule,FormsModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
  
})


export class AppModule { }
