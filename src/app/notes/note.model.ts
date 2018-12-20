export interface Note{
    id: string;
    name: string;
    height: number;
}

export interface Measure{
    name: string;
    value: number;
    unit: Unit;
}

export interface Unit{
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