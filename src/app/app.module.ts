import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornsComponent } from './unicorns/unicorns.component';
import { UnicornDetailComponent } from './unicorn-detail/unicorn-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UnicornsComponent,
    UnicornDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
