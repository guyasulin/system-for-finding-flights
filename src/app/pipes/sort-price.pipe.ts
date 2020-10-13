import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../models/flight';

@Pipe({
  name: 'filterPrice',
  pure: false

})
export class FilterPricePipe implements PipeTransform {

  transform(flight:Flight[], args?: number):any {
    let maxPrice = args;
    if (flight.map(a => a.price).reduce((a,b) => a + b) <= maxPrice) {
      return flight;
    }
  }
}
