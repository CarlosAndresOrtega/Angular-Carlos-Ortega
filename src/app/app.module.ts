import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftComponentComponent } from './left-component/left-component.component';
import { CenterComponentComponent } from './center-component/center-component.component';
import { RightComponentComponent } from './right-component/right-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponentComponent,
    CenterComponentComponent,
    RightComponentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
