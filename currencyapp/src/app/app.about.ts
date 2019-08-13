import { Component } from '@angular/core';

@Component({
    templateUrl: './app.about.html',
    styleUrls: ['./app.component.scss'],

})

export class PageAbout {
    title = 'About';

    // variable to use on the html file
    showName: string = '';

    constructor() {
        // assigning the variable to the value
        // value from sessionStorage
        this.showName = sessionStorage.getItem("username");
    }
    
    // when the 'Submit' button is clicked
    nameEntered(saved: string) {
        
        // this will stop the form from submitting when 
        // theres nothing on the input
        if(!saved) {
            return false;
        }
        
        // the value will be saved to sessionStorage
        // with the 'key' called 'username'
        sessionStorage.setItem("username", saved);

        // this function will reload the page to update the name on the site
        setTimeout(function(){
            window.location.reload();
        }, 500);
        
    }

}