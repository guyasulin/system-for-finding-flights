import { Flight } from './../models/flight';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-flight-search-result',
  templateUrl: './flight-search-result.component.html',
  styleUrls: ['./flight-search-result.component.scss']
})
export class FlightSearchResultComponent implements OnInit {

  public maxPrice:number;
  public minPrice:number;
  public flights:Flight[][];
  public opened: boolean = true;
  public isNonStop: boolean = true;
  public isOneStop: boolean = true;
  public filterPrice: any;
  public isLengthSort:boolean = true;

  constructor(
    private flightsService: FlightsService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  const from:string = this.route.snapshot.params.from;
  const dest:string = this.route.snapshot.params.dest;
  const depart:Date = (this.route.snapshot.params.depart != "undefined") ? new Date(this.route.snapshot.params.depart) : null;
  const returnDate:Date = (this.route.snapshot.params.return != "undefined") ? new Date(this.route.snapshot.params.return) : null;
  this.flights = this.flightsService.filterFlights(from, dest, depart, returnDate);
  
  const pricesArray = this.flights.map(flight => flight.map(a => a.price).reduce((a,b) => a + b));
  this.maxPrice = pricesArray.reduce((a, b)=>Math.max(a, b), 0);
  this.minPrice = pricesArray.reduce((a, b)=>Math.min(a, b), Number.MAX_SAFE_INTEGER);
  this.filterPrice = this.maxPrice;
  }

  onNonStop() {
    this.isNonStop = !this.isNonStop;
  }

  onOneStop() {
    this.isOneStop = !this.isOneStop;
  }

  onLengthSort() {
    this.isLengthSort = !this.isLengthSort;
  }

  formatLabel(value: number) {
    return value + '$';
  }
}
