import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketViewData } from 'src/app/Core/Services/market-view.data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo';
  BearerToken = "HCETRP406LI4URMN";

  public marketBriefingData;
  isPositive: boolean;
  public sectorPerfomanceImageOne = [];

  public earnings = [];

  constructor(private _http: HttpClient, private _marketBriefingService: MarketViewData) { }

  ngOnInit(): void {
    this.checkData().subscribe(
      data => {
        let dat = JSON.stringify(data);
        console.log(`returned data: ${dat}`);
      });
    this.getMarketBriefing();
    this.getEarnings();
    this.getSectorPerfImages();
  }

  checkData(): Observable<any> {
    return this._http.get<any>(this.url, {headers: {Authorization: this.BearerToken}});
  }

  getEarnings() {
    this.earnings = this._marketBriefingService.earnings;
  }

  getSectorPerfImages() {
    this.sectorPerfomanceImageOne = this._marketBriefingService.sectorPerformanceImageOne;
  }

 // this method gets the market briefing data from the data service
  
  getMarketBriefing() {
    this.marketBriefingData = this._marketBriefingService.getMarketBriefing();
  }

  comparePercentageValue(value) {
    if(value > 0){
      this.isPositive = true;
    } 
    if(value < 0) {
      this.isPositive = false;
    }
  }

}
