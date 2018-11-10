export class Ability {
    public score: number;

    constructor(score: number) {
        this.score = score;
    }

    public get modifier(): number {
        return this.score % 5;
    }
}
