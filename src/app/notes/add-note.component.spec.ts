import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ContextService } from '../shared';
import { FormBuilder } from '@angular/forms';
import { NoteService } from './note.service';
import { Router } from '@angular/router';
import { AddNoteComponent } from './add-note.component';

describe('AddNoteComponent', () => {
    let comp: AddNoteComponent;
    let fixture: ComponentFixture<AddNoteComponent>;

    beforeEach(() => {
        const contextServiceStub = {
            showBackBtn: {
                next: () => ({})
            },
            moduleTitle: {
                next: () => ({})
            }
        };
        const formBuilderStub = {
            group: () => ({}),
            array: () => ({})
        };
        const noteServiceStub = {
            addNote: () => ({
                subscribe: () => ({})
            })
        };
        const routerStub = {
            navigateByUrl: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ AddNoteComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: ContextService, useValue: contextServiceStub },
                { provide: FormBuilder, useValue: formBuilderStub },
                { provide: NoteService, useValue: noteServiceStub },
                { provide: Router, useValue: routerStub }
            ]
        });
        fixture = TestBed.createComponent(AddNoteComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(FormBuilder);
            spyOn(comp, 'measureFactory');
            spyOn(formBuilderStub, 'group');
            spyOn(formBuilderStub, 'array');
            comp.ngOnInit();
            expect(comp.measureFactory).toHaveBeenCalled();
            expect(formBuilderStub.group).toHaveBeenCalled();
            expect(formBuilderStub.array).toHaveBeenCalled();
        });
    });

    describe('measureFactory', () => {
        it('makes expected calls', () => {
            const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(FormBuilder);
            spyOn(formBuilderStub, 'group');
            comp.measureFactory();
            expect(formBuilderStub.group).toHaveBeenCalled();
        });
    });

    describe('addMeasure', () => {
        it('makes expected calls', () => {
            spyOn(comp, 'measureFactory');
            comp.addMeasure();
            expect(comp.measureFactory).toHaveBeenCalled();
        });
    });

});