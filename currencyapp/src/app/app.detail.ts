import { Component, Input }       from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient }             from '@angular/common/http';
import { CryptoCurrencyType, coinList } from './CryptoModel';
import { ArrowComponent }    from './app.arrow';
import { CurrencyService }    from './app.currencyService';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-detail',
    templateUrl:  './app.detail.html',
    styleUrls: ['./app.component.scss'],
    providers: [ArrowComponent, CurrencyService]
})

export class PageDetail { 
    priceInfo: Array<any>
    currencyID: number = 0;
    close: number = 0;
    open: number = 0;
    price: number = 0;
    img: string = '';
    symbol: string = '';
    name: string = '';
    arrowChange : boolean = false;

    constructor(private route: ActivatedRoute, currencyService:CurrencyService) {
        // by importing the currencyService
        // this variable will get the newly updated array
        this.priceInfo = currencyService.getAllCurrencyPrices();
    }

    // after the component is created
    ngOnInit() {
        // this will get the parameter of the url
        this.route.params.forEach((params: Params) => {
            // getting the symbold
            let currencySymbol = params['currency'];

            // the symbol was lowercase
            // this gets the ID by symbol using getCoinArrayIndex function
            this.currencyID = this.getCoinArrayIndex(currencySymbol.toUpperCase());
        });

        // this loads the currency info
        this.getCurrencyInformation();
    }

    getCoinArrayIndex(abbreviation) {
        for(var i=0; i<this.priceInfo.length; i++) {
            if(this.priceInfo[i].symbol == abbreviation) {
                return i;
            }
        }
    }

    // function that gets all updated info from the currency service
    getCurrencyInformation() {
        // variables that get all info
        this.name = this.priceInfo[this.currencyID].name;
        this.price = this.priceInfo[this.currencyID].price;
        this.open = this.priceInfo[this.currencyID].open;
        this.close = this.priceInfo[this.currencyID].close;
        this.symbol = this.priceInfo[this.currencyID].symbol;
        this.img = this.priceInfo[this.currencyID].img;

        // if the close value is greater than the open value
        if(this.close > this.open) {
            // change the arrow to up
            // default is down
            // this value will get pass to the 'arrow component'
            this.arrowChange = true;
        }
    }
}


