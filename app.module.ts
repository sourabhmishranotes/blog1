import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviationchartComponent } from './deviationchart/deviationchart.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviationchartComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
