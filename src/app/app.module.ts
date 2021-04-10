import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './Components/news/news.component';
import { HomeComponent } from './Components/home/home.component';
import { AngularMaterialModule } from './Core/angular-material-module/angular-material.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MarketViewData } from './Core/Services/market-view.data.service';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/Shared Component/header/header.component';
import { NewsDataService } from './Core/Services/news.data.service';
import { MyanimationComponent } from './Components/myanimation/myanimation.component';
import { WebSocketDataService } from './Core/Services/web-socket-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    MyanimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [MarketViewData, NewsDataService,WebSocketDataService,
    {provide: APP_BASE_HREF, useValue: '/'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
