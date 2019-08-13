import { Component } from '@angular/core';
import { CryptoCurrencyType, coinList } from './CryptoModel';

@Component({
    selector: 'app-root',
    templateUrl:  './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // title of the app
    title = 'CryptoCurrency';

    // variable to get the saved name from the sessionStorage
    savedName : string;

    constructor() {
      // getting the username from the sessionStorage
      this.savedName = sessionStorage.getItem('username');
    }

}