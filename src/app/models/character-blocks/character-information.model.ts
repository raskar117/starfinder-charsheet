import { Theme } from './../../enums/theme.enum';
import { RaceType } from './../../enums/race-type.enum';
import { ClassType } from '../../enums/class-type.enum';
import { Gender } from '../../enums/gender.enum';

export class CharacterInformation {
    public name: string;
    public classType: ClassType;
    public level: number;
    public race: RaceType;
    public theme: Theme;
    public size: number;
    public speed: number;
    public gender: Gender;
    public homeWorld: string;
    public alignment: string;
    public deity: string;
    public playerName: string;

    constructor(name: string, classType: ClassType, level: number, race: RaceType, theme: Theme, size: number,
        speed: number, gender: Gender, homeWorld: string, alignment: string, deity: string, playerName: string) {
        this.name = name;
        this.classType = classType;
        this.level = level,
        this.race = race,
        this.theme = theme,
        this.size = size,
        this.speed = speed,
        this.gender = gender;
        this.homeWorld = homeWorld;
        this.alignment = alignment;
        this.deity = deity;
        this.playerName = playerName;
    }
}
