import { Flight } from './../models/flight';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
   private flights: Flight[] = [
      {
         id: 1,
         from: "Israel",
         destination: "Mexico",
         depart: new Date("2020-10-10T08:44:29+0100"),
         price: 500,
         lengthOfFlight: 8,
         returnFlight: null
      },
      {
         id: 2,
         from: "Israel",
         destination: "Italy",
         depart: new Date("2020-10-12T08:44:29+0100"),
         price: 120,
         lengthOfFlight: 2,
         returnFlight: null
      },
      {
         id: 3,
         from: "Italy",
         destination: "Mexico",
         depart: new Date("2020-10-14T08:44:29+0100"),
         price: 400,
         lengthOfFlight: 700,
         returnFlight: null
      },
      {
         id: 4,
         from: "Italy",
         destination: "Israel",
         depart: new Date("2020-10-15T08:44:29+0100"),
         price: 120,
         lengthOfFlight: 4,
         returnFlight: null
      },
      {
         id: 4,
         from: "Turkiye",
         destination: "Israel",
         depart: new Date("2020-10-15T08:44:29+0100"),
         price: 100,
         lengthOfFlight: 4,
         returnFlight: null
	  },
	  {
		id: 4,
		from: "Italy",
		destination: "Turkiye",
		depart: new Date("2020-10-15T08:44:29+0100"),
		price: 100,
		lengthOfFlight: 4,
		returnFlight: null
	 }
	  
   ];

  constructor() {
 
  }


  getFlights() {
   return this.flights
  }

  // get flights with the params that the user entered - direct flights
   getFlightsByParams(from: string, dest:string, fromDate: Date, toDate: Date):Array<Flight[]> {
      const flights:Array<Flight[]> = new Array<Flight[]>();
      for (let i = 0; i < this.flights.length; i++) {
         const flight:Flight = this.flights[i];
		 if (
			//  (!from || flight.from == from) && 
		 	(from == "undefined" || !from || flight.from == from) && 
         (!fromDate || this.compareDates(flight.depart, fromDate) >= 0) && 
         (!toDate || this.compareDates(flight.depart, toDate) <= 0) && 
			(dest == "undefined" || !dest || flight.destination == dest)
			// (!dest || flight.destination == dest)
			)
			{
               flights.push([flight]); 
         }
      }
      return flights;
   }

   //get flights with one connection
   getConnectionFlights(from: string, dest:string, fromDate: Date, toDate: Date):Array<Flight[]> {
      const flights:Array<Flight[]> = new Array<Flight[]>();
      const firstFlights = this.getFlightsByParams(from, null, fromDate, toDate);
      // get all the flights from the "from" country
      for (let i = 0; i < firstFlights.length; i++) {
         const firstFlight:Flight = firstFlights[i][0];
         const secondFlights = this.getFlightsByParams(firstFlight.destination, dest, firstFlight.depart, toDate);
         //check if there are flights from the first dest to the "dest" country
         for (let j = 0; j < secondFlights.length; j++) {
            const secondFlight = secondFlights[j];

            if (this.compareDates(secondFlight[0].depart, firstFlight.depart) >= 0) { //TODO - check time
               flights.push([firstFlight, secondFlight[0]]);
               break;
            }
         }
      }
      return flights;
   }

compareDates(date1:Date, date2:Date) {
   const isEqual = date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate();
   if (isEqual === true) {
      return 0;
   } else if (date1 < date2) {
      return -1;
   }
   return 1;
}



  filterFlights(from: string, dest:string, fromDate: Date, toDate: Date):Array<Flight[]> {
   const connectionFlights = this.getConnectionFlights(from, dest, fromDate, toDate);
   const directFlights = this.getFlightsByParams(from, dest, fromDate, toDate); 
//    debugger
   return directFlights.concat(connectionFlights);

   //    //return flights
   // const returnFlights = this.getFlightsByParams(dest, from, returnDate); 
   // const returnConnectionFlights = this.getConnectionFlights(dest, from, returnDate);//to fix this

   

   // const results:Array<Flight[]> = new Array<Flight[]>(); //to fix this
   // for (let i = 0; i < connectionFlights.length; i++) {
   //    const connectionFlight = connectionFlights[i][0];
   //    for (let j = 0; j < returnFlights.length; j++) {
   //       const returnFlight = returnFlights[j][0];
   //       connectionFlight.returnFlight = returnFlight;
   //       results.push(connectionFlights[i]);
   //    }
   // }

   // for (let i = 0; i < returnFlights.length; i++) {
   //    const connectionFlight = returnFlights[i][0];
   //    for (let j = 0; j < returnFlights.length; j++) {
   //       const returnFlight = returnFlights[j][0];
   //       connectionFlight.returnFlight = returnFlight;
   //       results.push(returnFlights[i]);
   //    }
   // }

  //return results;
  }
}
