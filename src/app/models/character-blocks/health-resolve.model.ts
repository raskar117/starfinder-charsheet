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
        this.stamina = stamina ? new HealthResolvePoints(stamina.current, stamina.total) : new HealthResolvePoints(0, 0);
        this.hit = hit ? new HealthResolvePoints(hit.current, hit.total) : new HealthResolvePoints(0, 0);
        this.resolve = resolve ? new HealthResolvePoints(resolve.current, resolve.total) : new HealthResolvePoints(0, 0);
    }
}
