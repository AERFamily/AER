import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutpageComponent,
    ComingsoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtfZfJy2rlYQbGO_YsYOqRhpYjbZIzi14'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
