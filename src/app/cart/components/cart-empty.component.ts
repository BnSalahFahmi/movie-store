import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-empty-cart',
    template: `
        <img class="empty-cart" src="assets/empty-card.png" alt="empty cart">
    `,
    styles: [
        `
        .empty-cart{
                position: absolute;
                margin: auto;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
              }
        `
    ]
})
export class EmptyCartComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }
}