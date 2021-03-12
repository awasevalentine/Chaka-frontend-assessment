import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MarketBriefingData } from "../Models/market-briefing.model";


@Injectable({
    providedIn: 'root'
  })
export class MarketViewData {

 public earnings = ['Symbol', 'Company', 'Fiscal Period', 'Consensus Estimated EPS', 'Actual EPS', 'Suprise', 'EPS, Year Ago', '%Change From Last Year']

  public marketBriefing = [
    {
      organizationName: 'BNGO', description: 'Bionano Genomics Inc', stockPrice: 1.39, percentage: '+57.20'
    },
    {
      organizationName: 'AAPL', description: 'Apple Inc', stockPrice: 135.355, percentage: '-0.98'
    },
    {
      organizationName: 'INTC', description: 'Intel Corp.', stockPrice: 49.495, percentage: '+5.15'
    },
    {
      organizationName: 'GEVO', description: 'Gevo Inc', stockPrice: 4.70, percentage: '-2.49'
    },
    {
      organizationName: 'FCEL', description: 'Fuelcell Energy Inc', stockPrice: 10.69, percentage: '-7.41'
    },
    {
      organizationName: 'SNAP', description: 'Snap Inc - Class A', stockPrice: 50.68, percentage: '+5.02'
    },
    {
      organizationName: 'AAL', description: 'American Airlines Group Inc', stockPrice: 15.805, percentage: '-1.59'
    },
    {
      organizationName: 'OCGN', description: 'Ocugen Inc', stockPrice: 2.08, percentage: '-7.56'
    },
    {
      organizationName: 'PLTR', description: 'Palantir Technologies Inc - Class A', stockPrice: 24.685, percentage: '-3.69'
    },
    {
      organizationName: 'GE', description: 'General Electric Co.', stockPrice: 10.59, percentage: '-0.47'
    }

  ];

  public sectorPerformanceImageOne = [
    { name: 'Health Care ', percentage: '+0.46', image: "../../../assets/sector-highlight/health-care.jpg"},
    { name: 'Comunication Services', percentage: '0.00', image: "./../../assets/sector-highlight/communication-service.jpg" },
    { name: 'Utilites', percentage: '-0.07', image: "../../../assets/sector-highlight/sport.jpg"},
    { name: 'consumer Discretionary', percentage: '-0.07', image: "./../../assets/sector-highlight/materials.jpg" },
     { name: 'Financials ', percentage: '-0.33', image: "../../../assets/sector-highlight/financial.jpg"},
    { name: 'Consumer Staples', percentage: '-0.38', image: "../../../assets/sector-highlight/materials.jpg" },
    { name: 'Materials', percentage: '-0.42', image: "../../../assets/sector-highlight/materials.jpg"},
    { name: 'Technology', percentage: '-0.51', image:"../../../assets/sector-highlight/technology.jpg"}
  ]

  public sectorPerformanceImageTwo = [
    { name: 'Real Estate ', percentage: '-0.55', image: "../../../assets/sector-highlight/real-estate.jpg"},
    { name: 'Energy ', percentage: '-0.55', image: "../../../assets/sector-highlight/energy.jpg"},
    { name: 'Industrials ', percentage: '-0.78', image: "../../../assets/sector-highlight/industrials.jpg"},
  ]


  public sectorHighlight = [
    { title: 'Health Care', percentage: '+0.46', image: "../../../assets/sector-highlight/health-care.jpg" },
    { title: 'Industrials', percentage: '-0.78', image: "../../../assets/sector-highlight/industrials.jpg" }
  ]


  public getMarketBriefing(){
    return this.marketBriefing;
  }
}
