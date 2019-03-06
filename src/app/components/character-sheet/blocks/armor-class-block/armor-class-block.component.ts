import { BlockComponent } from '../block-component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-armor-class-block',
    templateUrl: './armor-class-block.component.html',
    styleUrls: ['./armor-class-block.component.scss']
})
export class ArmorClassBlockComponent extends BlockComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
