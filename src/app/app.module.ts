import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component20Component } from './component20/component20.component';
import { Component21Component } from './component21/component21.component';
import { Component22Component } from './component22/component22.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component20Component,
    Component21Component,
    Component22Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
