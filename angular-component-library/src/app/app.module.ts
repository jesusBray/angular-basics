import { PRUEVA1UDFModule } from 'prueva1-udf';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyFirstLibraryModule } from 'my-first-library';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyFirstLibraryModule,
    PRUEVA1UDFModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
