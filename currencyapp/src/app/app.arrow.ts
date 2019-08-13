import { Component, Input } from '@angular/core';

// Arrow component to be used through other components
@Component({
    selector: 'app-arrow',
    template: `
        <div *ngIf="arrowSwitch" class="arrow-green">&#x25B2;</div>
        <div *ngIf="!arrowSwitch" class="arrow-red">&#x25BC;</div>
    `
})

export class ArrowComponent {
    // this will determine if the arrow will go up or down
    @Input() arrowSwitch : boolean;
}