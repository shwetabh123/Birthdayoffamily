import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      { path:"", component : HomeComponent },
    
      { path:"person", component : PersonComponent }
    
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
