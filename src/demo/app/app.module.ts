import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SUIButtonModule } from '../../lib/button/button.module';
import {ButtonDocComponent} from "./button/button-doc.component";


const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/elements/button' },
    {
        path: 'elements',
        children: [
            { path: 'button', component: ButtonDocComponent }
        ]
    },
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        SUIButtonModule
    ],
    declarations: [
        AppComponent,
        ButtonDocComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}