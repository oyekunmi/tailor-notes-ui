export interface Note{
    id: string;
    name: string;
    measures: Measure[]
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
    phone: string;
    others: string;
    measures: Measure[];
    
    constructor(note: Note){
        this.id = note.id;
        this.name = note.name;
    }
}