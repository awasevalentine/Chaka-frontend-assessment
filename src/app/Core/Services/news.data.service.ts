import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class NewsDataService {
  public newsData = [
    { title: `Bionano Gemonics'(NASDAQ:BNGO) Phare Price Is 55% Over The Previous Yr. `, description: ` Bionano Gemonics'(NASDAQ:BNGO) Phare Price Is 55% Over The Previous Yr. `,
      url: 'BNGO', image: "../../../assets/sector-highlight/health-care.jpg", date: `06/12/2020, 15:42:23 | Fintech Zoom`
    },
    { title: ` Bionano Genomics, Inc. (BNGO) Upgraded to Buy: What Does It Mean for the Stock?`, description: `Bionano Genomics, Inc. (BNGO) has been upgraded to a Zack Rank 2 (Buy), reflectiong growing optimism about the company's earning propercts. This might drive the sto..`,
      image: "./../../assets/sector-highlight/communication-service.jpg", url: `BNGOW     BNGO`, date: `02/10/2020, 17:00:04 | Yahoo Finance`
    },
    { title: `Bionano Genomics, Inc. (BNGO) Upgraded to Buy: Here's Why`, description: `Bionano Genomics, Inc. (BNGO) might move higher on growing optimism about its earnings prospects, which is reflected by its upgrade to Zacks Rank 2 (Buy).`,
      image: "./../../assets/sector-highlight/sport.jpg", url: `BNGO     BNGOW`, date: `31/08/2020, 17:00:04 | Yahoo Finance`
    },
    { title: `Bionano Gemonics Reports Second Quarter 2020 Financial Results and Provides Business Update | MarketScreener`, description: `SAN DIEGO, AUG. 13, 2020 -- Bionano Genomics, Inc., a life sciences instrumentation company that develops and markets Saphyr, a platform for ultra-sensitive and ul...`,
      image: "./../../assets/sector-highlight/materials.jpg", url: `BNGO   BNGOW`, date: `13/08/2020, 18:08:00 | MarketScreener`
    },
     { title:  `Bionano Gemonics Reports Second Quarter 2020 Financial Results and Provides Business Update`, description: `SAN DIEGO, AUG. 13, 2020 (GLOBE NEWSWIRE) --Bionano Genomics, Inc. (NASDAQ:BNGO), a life science instrumentation company that develops and markets....`,
       image: "./../../assets/sector-highlight/financial.jpg", url: 'BNGO    BNGOW', date: `13/08/2020, 18:08:00 Benzinga`
    },
    { title: `Thinking about buying stock in BioNano Genomics, Conduent Inc, OpGen Inc, Uber Technologies, or MGM Resorts?`, description: `NEW YORK, AUG. 7, 2020 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for BNGO, CNDT, OPNG, UBER, and MGM. To see how InvestorsObserver's propri...`,
      image: "./../../assets/sector-highlight/materials.jpg", url: 'BNGO    BNGOW', date: `07/08/2020, 16:36:00 | PR Newswire`
    }
  ]

  constructor() {}
}
