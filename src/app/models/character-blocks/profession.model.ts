import { Skill } from './skill.model';
export class Profession {
    public displayName: string;
    public skill: Skill;

    constructor(displayName: string, skill: Skill) {
        this.displayName = displayName;
        this.skill = skill;
    }
}
