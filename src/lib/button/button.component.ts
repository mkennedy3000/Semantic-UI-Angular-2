import {
    Component, ChangeDetectionStrategy, HostBinding, Input, ElementRef, OnChanges,
    SimpleChanges, Renderer
} from '@angular/core';

import { SUIButtonState } from './button.model';


const BASE_CLASSES = 'ui button';

@Component({
    selector: 'sui-button',
    templateUrl: 'button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SUIButtonComponent implements OnChanges {

    @Input() type: string = '';
    @Input() focusable: boolean;
    @Input() state: SUIButtonState = SUIButtonState.DEFAULT;

    @HostBinding('class') classes = BASE_CLASSES;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            const change = changes[propName];
            switch (propName) {
                case 'type':
                case 'state':
                    const stateClass = this.state === SUIButtonState.DEFAULT ? '' : this.state;
                    this.classes = `${stateClass} ${this.type} ${BASE_CLASSES}`;
                    break;
                case 'focusable':
                    let tabindex = change.currentValue ? '0' : null;
                    this.renderer.setElementAttribute(this.elementRef.nativeElement, 'tabIndex', tabindex);
                    break;
            }
        }
    }
}