import { FlightSearchResultComponent } from './flight-search-result/flight-search-result.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';


const routes: Routes = [
  {
    path: '',
    component: FlightSearchComponent,
    pathMatch: 'full',
  },
  {
    path: 'flightSearchResult/:from/:dest/:depart/:return',
    component: FlightSearchResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
