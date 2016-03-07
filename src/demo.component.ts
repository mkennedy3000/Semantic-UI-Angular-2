/// <reference path="/typings/browser.d.ts" />

import {Component, Input, OnInit} from 'angular2/core'
import {SemanticButtonComponent} from './button/button.component'
import {EMPHASIS} from './modifiers/emphasis'
import {TYPE} from './modifiers/type'
import {COLOR} from './modifiers/color'
import {STATE} from './modifiers/state'

@Component({
    selector: 'sm-demo',
    template: `
    <div class="ui very padded basic inverted grey segment">
        <sm-button
            [sm-emphasis]="emphasis"
            [sm-type]="type"
            [sm-focusable]="focusable"
            [sm-inverted]="inverted"
            [sm-state]="state"
            [sm-color]="color">
                Semantic Button
        </sm-button>
        <div class="ui hidden divider"></div>
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            <b>Color:</b>{{color ? color : 'none'}}
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item" (click)="color=''">none</div>
              <div class="item" (click)="color='red'">red</div>
              <div class="item" (click)="color='blue'">blue</div>
              <div class="item" (click)="color='green'">green</div>
            </div>
          </div>
        </div>
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            <b>Emphasis:</b>{{emphasis ? emphasis : 'none'}}
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item" (click)="emphasis=''">none</div>
              <div class="item" (click)="emphasis='primary'">primary</div>
              <div class="item" (click)="emphasis='secondary'">secondary</div>
            </div>
          </div>
        </div>
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            <b>Focusable:</b>:{{focusable}}
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item" (click)="focusable=true">true</div>
              <div class="item" (click)="focusable=false">false</div>
            </div>
          </div>
        </div>
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            <b>Inverted:</b>{{inverted}}
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item" (click)="inverted=true">true</div>
              <div class="item" (click)="inverted=false">false</div>
            </div>
          </div>
        </div>
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            <b>State:</b>{{state ? state : 'normal'}}
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item" (click)="state=''">normal</div>
              <div class="item" (click)="state='active'">active</div>
              <div class="item" (click)="state='disabled'">disabled</div>
              <div class="item" (click)="state='loading'">loading</div>
            </div>
          </div>
        </div>
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            <b>Type:</b>{{type ? type : 'standard'}}
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item" (click)="type=''">standard</div>
              <div class="item" (click)="type='basic'">basic</div>
            </div>
          </div>
        </div>
    </div>`,
    directives: [SemanticButtonComponent]
})
export class DemoComponent {

    emphasis: string = EMPHASIS.NONE;
    type: string = TYPE.STANDARD;
    focusable: boolean = false;
    inverted: boolean = false;
    color: string;
    state: string;
}