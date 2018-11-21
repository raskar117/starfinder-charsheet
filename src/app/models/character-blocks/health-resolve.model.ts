export class HealthResolvePoints {
    current: number;
    total: number;

    constructor(current: number, total: number) {
        this.current = current;
        this.total = total;
    }
}

export class HealthResolve {
    stamina: HealthResolvePoints;
    hit: HealthResolvePoints;
    resolve: HealthResolvePoints;

    constructor(stamina: HealthResolvePoints, hit: HealthResolvePoints, resolve: HealthResolvePoints) {
        this.stamina = stamina;
        this.hit = hit;
        this.resolve = resolve;
    }
}
