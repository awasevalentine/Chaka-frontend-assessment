import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NewsComponent } from './Components/news/news.component';
import { MyanimationComponent } from './Components/myanimation/myanimation.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'myanimation', component: MyanimationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
