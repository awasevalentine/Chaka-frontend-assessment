import { Component, OnInit } from '@angular/core';
import { MarketViewData } from 'src/app/Core/Services/market-view.data.service';
import { NewsDataService } from 'src/app/Core/Services/news.data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public newsData = [];

  constructor(private _newsService: NewsDataService) { }

  ngOnInit(): void {
    this.getSectorPerfImages();
  }

  getSectorPerfImages() {
    this.newsData = this._newsService.newsData;
  }

}
