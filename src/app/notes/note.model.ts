export interface Note{
    id: string;
    name: string;
    height: number;
}

export class MeasurementClass implements Note{
    id: string;
    name: string;
    height: number;
    constructor(note: Note){
        this.id = note.id;
        this.name = note.name;
        this.height = note.height;
    }
}