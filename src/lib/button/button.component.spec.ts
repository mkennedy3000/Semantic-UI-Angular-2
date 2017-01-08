import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SUIButtonModule } from './button.module';
import { SUIButtonComponent } from './button.component';
import { SUIButtonState } from './button.model';

@Component({
    template: `<sui-button [type]="type" [state]="state" [focusable]="focusable"></sui-button>`
})
class ConsumingComponent {
    type = 'primary';
    state = SUIButtonState.DEFAULT;
    focusable = false;
}

describe('SUIButtonComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SUIButtonModule],
            declarations: [ConsumingComponent]
        });
    });

    describe("defaults", () => {

        it('should have "ui button" as the class', () => {
            const f = TestBed.createComponent(SUIButtonComponent);
            f.detectChanges();

            expect(f.nativeElement.className).toEqual('ui button');
        });

        it('should not be focusable', () => {
            const f = TestBed.createComponent(SUIButtonComponent);
            f.detectChanges();

            expect(f.nativeElement.tabIndex).toBe(-1);
        });

        it('should be in the default state', () => {
            const f = TestBed.createComponent(SUIButtonComponent);
            f.detectChanges();

            expect(f.componentInstance.state).toEqual(SUIButtonState.DEFAULT);
            expect(f.nativeElement.className).not.toContain(SUIButtonState.DEFAULT);
        });

        it('should have no type', () => {
            const f = TestBed.createComponent(SUIButtonComponent);
            f.detectChanges();

            expect(f.componentInstance.type).toEqual('');
        });
    });

    it ('can change state', () => {
        const f = TestBed.createComponent(ConsumingComponent);
        const button = f.debugElement.query(By.directive(SUIButtonComponent))
        f.detectChanges();

        f.componentInstance.state = SUIButtonState.ACTIVE;
        f.detectChanges();
        expect(button.nativeElement.className).toContain(SUIButtonState.ACTIVE);
        expect(button.nativeElement.className).toContain('ui button');

        f.componentInstance.state = SUIButtonState.DISABLED;
        f.detectChanges();
        expect(button.nativeElement.className).toContain(SUIButtonState.DISABLED);
        expect(button.nativeElement.className).toContain('ui button');

        f.componentInstance.state = SUIButtonState.LOADING;
        f.detectChanges();
        expect(button.nativeElement.className).toContain(SUIButtonState.LOADING);
        expect(button.nativeElement.className).toContain('ui button');

        f.componentInstance.state = SUIButtonState.DEFAULT;
        f.detectChanges();
        expect(button.nativeElement.className).not.toContain(SUIButtonState.DEFAULT);
        expect(button.nativeElement.className).toContain('ui button');
    });

    it ('can be focusable', () => {
        const f = TestBed.createComponent(ConsumingComponent);
        const button = f.debugElement.query(By.directive(SUIButtonComponent))
        f.detectChanges();

        f.componentInstance.focusable = true;
        f.detectChanges();
        expect(button.nativeElement.tabIndex).toBe(0);

        f.componentInstance.focusable = false;
        f.detectChanges();
        expect(button.nativeElement.tabIndex).toBe(-1);
    });

    it ('can change type', () => {
        const f = TestBed.createComponent(ConsumingComponent);
        const button = f.debugElement.query(By.directive(SUIButtonComponent))
        f.detectChanges();

        expect(button.nativeElement.className).toContain('primary');
        expect(button.nativeElement.className).toContain('ui button');

        f.componentInstance.type = 'big secondary';
        f.detectChanges();
        expect(button.nativeElement.className).toContain('big secondary');
        expect(button.nativeElement.className).toContain('ui button');
    });
});