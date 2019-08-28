import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.compontent';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHightlightDirective } from './basic-hightlight.directive';
import { BetterHightlightDirective } from './better-hightlight.directive';
import { UnlessDirective } from './unless.directive';

console.log(CockpitComponent);

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHightlightDirective,
    BetterHightlightDirective,
    UnlessDirective
  ],
  imports: [
		BrowserModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
