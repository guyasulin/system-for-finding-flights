export class Flight {
    id:number;
    from: string;
    destination:string;
    price: number;
    depart: Date;
    lengthOfFlight?:number;
    returnFlight:Flight;
}
