export class Initiative {
    private _dexModifier: number;
    miscModifier: number;

    constructor(dexModifier: number, miscModifier: number) {
        this._dexModifier = dexModifier;
        this.miscModifier = miscModifier;
    }

    public get dexModifier(): number {
        return this._dexModifier;
    }

    public get total(): number {
        return this.dexModifier + this.miscModifier;
    }
}
