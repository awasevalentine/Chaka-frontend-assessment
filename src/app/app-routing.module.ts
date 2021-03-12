import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MarketViewComponent } from './Components/market-view/market-view.component';
import { NewsComponent } from './Components/news/news.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'market-view', component: MarketViewComponent
  },
  {
    path: 'news', component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
