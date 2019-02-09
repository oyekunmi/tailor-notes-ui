import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatSidenavModule } from '@angular/material';
import { ContextService, HeaderComponent, NavComponent } from './shared';
import { SearchButtonComponent } from './shared/header/search-button/search-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SearchButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [ContextService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
