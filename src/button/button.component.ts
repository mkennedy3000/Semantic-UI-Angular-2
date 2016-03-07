import {Component, Input} from 'angular2/core'

@Component({
    selector: 'sm-button',
    template: `
        <div class="ui {{state}} {{emphasis}} {{color}} {{inverted ? 'inverted' : null}} {{type}} button"
            [attr.tabindex]="focusable ? 0 : null">
            <ng-content></ng-content>
        </div>
    `
})
export class SemanticButtonComponent {

    @Input('sm-color')
    color: string;

    @Input('sm-emphasis')
    emphasis: string;

    @Input('sm-focusable')
    focusable: boolean = false;

    @Input('sm-inverted')
    inverted: boolean = false;

    @Input('sm-state')
    state: string;

    @Input('sm-type')
    type: string;
}