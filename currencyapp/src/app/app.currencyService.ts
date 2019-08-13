import { Component } from '@angular/core';
import { CryptoCurrencyType, coinList } from './CryptoModel';

// This is the service.
export class CurrencyService {
    // variable that gets the newly updated array 
    // from CryptoModel.ts
    currencyArray: Array<CryptoCurrencyType>;

    constructor() {
        this.currencyArray = coinList;
    }

    getAllCurrencyPrices() {
        // this function will return the newly updated curreny array
        // that can be used on other components
        return this.currencyArray;
    }
}
