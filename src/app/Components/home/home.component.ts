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
  public sectorPerfomanceImageTwo = [];
  public sectorHighlight = [];

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
    this.sectorPerfomanceImageTwo = this._marketBriefingService.sectorPerformanceImageTwo;
    this.sectorHighlight = this._marketBriefingService.sectorHighlight;
  }

 // this method gets the market briefing data from the data service

  getMarketBriefing() {
    this.marketBriefingData = this._marketBriefingService.getMarketBriefing();
    this.marketBriefingData.filter((item) => {
      let percentage = parseFloat(item.percentage);
      if(percentage >= 0 ){
        this.isPositive = true;
        console.log(`this is true: `, percentage);
      }

      if(percentage < 0 ) {
        this.isPositive = false;
        console.log( `this is for false: `, percentage);
      }
    })
  }


  // this method is used to determine the value of the percentage in order to change it color

  compareValue(value) {
    let myvalue = parseFloat(value);
    if(myvalue > 0 ) {
      return 'green';
    }
    if(myvalue < 0) {
      return 'red';
    }
  }

}
