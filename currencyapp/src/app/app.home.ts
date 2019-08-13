import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CryptoCurrencyType, coinList } from './CryptoModel';
import { ArrowComponent }    from './app.arrow';
import { CurrencyService }    from './app.currencyService';

@Component({
    templateUrl:  './app.home.html',
    styleUrls: ['./app.component.scss'],
    providers: [ArrowComponent, CurrencyService]
})

export class PageHome { 
    currencyArray: Array<CryptoCurrencyType>;

    arrowChange : boolean = false;
    open: number = 0;
    close: number = 0;

    currentSymbol: string;

    constructor(private http: HttpClient, currencyService : CurrencyService) {
        this.currencyArray  = coinList;
        this.getSomeData();
    }

    getCoinArrayIndex(abbreviation) {
        for(var i=0; i<this.currencyArray.length; i++) {
            if(this.currencyArray[i].symbol == abbreviation) {
                return i;
            }
        }
    }

    

    getSomeData() {
        // getting the main price of the cryptocurrencies
        let url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD';
        this.http.get<any>(url)
        // Get data and wait for result.
        .subscribe(result => {

            // Set the price for each item.
            for(var i=0; i<this.currencyArray.length; i++) {

                // Get the index for each item in the array and assign the price.
                this.currentSymbol = this.currencyArray[i].symbol;
                let idx           = this.getCoinArrayIndex(this.currentSymbol);
                this.currencyArray[idx].price = result[this.currentSymbol].USD;
            } 
        },

        // if the request fails, it will show error
        error => {
            alert(error.message);
        });

        // getting open and close prices from a different api link 
        // this will get each currencies info
        for(var i=0; i<this.currencyArray.length; i++) {
            let symbol = this.currencyArray[i].symbol;
            let url = "https://min-api.cryptocompare.com/data/histoday?fsym="+ symbol +"&tsym=USD&limit=1";
            
            this.http.get<any>(url)
            // Get data and wait for result.
            .subscribe(result => {
                // Set the close and open prices for each item.
                for(var i=0; i<this.currencyArray.length; i++) {
                    this.currentSymbol = this.currencyArray[i].symbol;
                    let idx = this.getCoinArrayIndex(this.currentSymbol);
                    
                    let priceInfo = result['Data'][1];
                    this.currencyArray[idx].close = priceInfo.close;
                    this.currencyArray[idx].open = priceInfo.open;

                    // if the close price is greater than open price
                    99999999999// the arrow will display up
                    if(this.currencyArray[idx].close > this.currencyArray[idx].open) {
                        this.arrowChange = true;
                    }
                }
            },
            // 2. Handle error.
            error => {
                alert(error.message);
            });
        }
    }

}
