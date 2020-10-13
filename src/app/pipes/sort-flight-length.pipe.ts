import { Flight } from './../models/flight';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFlightLength'
})
export class SortFlightLengthPipe implements PipeTransform {

  
  transform(flights: Flight[][], args: boolean): Flight[][]
  {
    if (args == false) {
      return flights.sort((aFlight: any, bFlight: any) => {
        let sumA = aFlight.map(a => a.lengthOfFlight).reduce((a,b) => a + b);
        let sumB = bFlight.map(a => a.lengthOfFlight).reduce((a,b) => a + b);
        if (sumA < sumB) {
          return 1;
        } else if (sumA > sumB) {
          return -1;
        } else {
          return 0;
        }
      });
    } 
    
    return flights.sort((aFlight: any, bFlight: any) => {
      let sumA = aFlight.map(a => a.lengthOfFlight).reduce((a,b) => a + b);
      let sumB = bFlight.map(a => a.lengthOfFlight).reduce((a,b) => a + b);
      if (sumA < sumB) {
        return -1;
      } else if (sumA > sumB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
