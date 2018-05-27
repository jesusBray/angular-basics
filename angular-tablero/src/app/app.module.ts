import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DateOfUserComponent } from './date-of-user/date-of-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DateOfUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
