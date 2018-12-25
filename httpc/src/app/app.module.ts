import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReqComponent } from './req/req.component';
import { ResComponent } from './res/res.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReqComponent,
    ResComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
