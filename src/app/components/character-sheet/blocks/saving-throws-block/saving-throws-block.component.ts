import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block-component';
import { SavingThrow } from '../../../../models/character-blocks/saving-throw.model';

@Component({
    selector: 'app-saving-throws-block',
    templateUrl: './saving-throws-block.component.html',
    styleUrls: ['./saving-throws-block.component.scss']
})
export class SavingThrowsBlockComponent extends BlockComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

    getSavingThrowsAbilityModifier(savingThrow: SavingThrow): number {
        return this.character.abilities.find(a => a.key === savingThrow.abilityKey).modifier;
      }

    getSavingThrowTotal(savingThrow: SavingThrow): number {
        return savingThrow.getTotal(this.getSavingThrowsAbilityModifier(savingThrow));
    }

}
