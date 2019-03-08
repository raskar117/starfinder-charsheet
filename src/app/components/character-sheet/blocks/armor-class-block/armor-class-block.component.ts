import { BlockComponent } from '../block-component';
import { Component, OnInit } from '@angular/core';
import { AbilityKey } from '../../../../enums/ability-key.enum';

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

    public get dexterityModifier(): number {
        return this.character.abilities.find(a => a.key === AbilityKey.DEXTERITY).modifier;
    }

}
