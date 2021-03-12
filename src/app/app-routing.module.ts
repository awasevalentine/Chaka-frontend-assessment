import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NewsComponent } from './Components/news/news.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
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
