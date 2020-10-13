import { Flight } from '../models/flight';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueFrom',
  pure: false
})
export class FilterPipeFrom implements PipeTransform {
  transform(flights: Flight[], args?: any): any {
      var art = flights.map(flight => flight.from);
      return new Set(art);
  }
}

@Pipe({
    name: 'uniqueDest',
    pure: false
})
export class FilterPipeDest implements PipeTransform {
    transform(flights: Flight[], args?: any): any {
        var art = flights.map(flight => flight.destination);
        return  new Set(art);
    }
  }

