import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlightSearchResultComponent } from './flight-search-result/flight-search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FilterPricePipe } from './pipes/sort-price.pipe';
import { SortFlightLengthPipe } from './pipes/sort-flight-length.pipe';
import { FilterPipeDest, FilterPipeFrom } from './pipes/sort-destinations .pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlightSearchComponent,
    FlightSearchResultComponent,
    FilterPricePipe,
    SortFlightLengthPipe,
    FilterPipeDest,
    FilterPipeFrom
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
