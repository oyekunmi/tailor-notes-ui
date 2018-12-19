export interface Note{
    id: string;
    name: string;
    height: number;
}

export class Measure{
    name: string;
    value: number;
    unit: Unit;
}

export class Unit{
    id: string;
    name: string;
}

export class MeasurementClass implements Note{
    id: string;
    name: string;
    height: number;
    measures: Measure[];
    
    constructor(note: Note){
        this.id = note.id;
        this.name = note.name;
        this.height = note.height;
    }
}