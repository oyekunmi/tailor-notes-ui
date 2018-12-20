import { Component, Input } from "@angular/core";
import { Measure } from "./note.model";

@Component({
    selector: 'note-field-display',
    template: `
    <label> {{noteField.name | titlecase }}: </label>
    <span> {{noteField.value}} {{ noteField.unit.id }} </span>
    `,
    styles: [
        `
        :host{
            display: inline-block;
            margin: 0 5px 0 0;
            padding: 5px;
            border-radius: 10px;
            font-size: 0.7em;
            border: dashed thin #2AA330;
            box-sizing: border-box;
        }
        `
    ]
})
export class NoteFieldDisplay{
    @Input() noteField: Measure;
}