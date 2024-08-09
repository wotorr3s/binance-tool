import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockViewComponent } from './stock-view/stock-view.component';

import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';


import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    StockViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
