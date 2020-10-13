import { Flight } from './../models/flight';
import { FlightsService } from '../services/flights.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-flight-search',
	templateUrl: './flight-search.component.html',
	styleUrls: [ './flight-search.component.scss' ]
})
export class FlightSearchComponent implements OnInit {
  
	@ViewChild('f', { static: true })f: NgForm;
	public flights: Flight[] = [];
	public selectedFlight: Flight;
	public depart: Date;
	public return: Date;

	constructor(private flightsService: FlightsService, private route: Router) {}

	ngOnInit() {
		this.flights = this.flightsService.getFlights();
		this.selectedFlight = new Flight();
	}

	searchFlights(val: Flight) {
		this.route.navigate([
			`/flightSearchResult/${this.selectedFlight.from}/${this.selectedFlight.destination}/${this.selectedFlight
				.depart}/${this.return}`
		]);
	}
}
