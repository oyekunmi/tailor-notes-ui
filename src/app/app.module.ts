import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatSidenavModule } from '@angular/material';
import { ContextService, HeaderComponent, NavComponent } from './shared';
import { SearchButtonComponent } from './shared/header/search-button/search-button.component';
import { SharedModule } from './shared.module';

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
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    SharedModule
  ],
  providers: [ContextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
