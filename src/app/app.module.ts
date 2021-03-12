import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketViewComponent } from './Components/market-view/market-view.component';
import { NewsComponent } from './Components/news/news.component';
import { HomeComponent } from './Components/home/home.component';
import { AngularMaterialModule } from './Core/angular-material-module/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MarketViewData } from './Core/Services/market-view.data.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MarketViewComponent,
    NewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [MarketViewData],
  bootstrap: [AppComponent]
})
export class AppModule { }
