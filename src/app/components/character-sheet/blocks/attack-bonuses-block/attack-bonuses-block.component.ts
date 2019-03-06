import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block-component';

@Component({
    selector: 'app-attack-bonuses-block',
    templateUrl: './attack-bonuses-block.component.html',
    styleUrls: ['./attack-bonuses-block.component.scss']
})
export class AttackBonusesBlockComponent extends BlockComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
