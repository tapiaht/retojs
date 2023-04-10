import { Reservation } from "./Reservation";

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin=origin
    this.destination=destination
    this.date=date
    this.capacity=capacity
    this.price=price
    this.passengers=[]
  }

  sellTicket(passenger) {
    if(this.capacity>0){
        this.passengers.push(passenger)
    }
    return 
  }
}