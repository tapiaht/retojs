import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class EconomicFlight extends Flight {
  sellTicket(passenger) {
    if(passenger.age<18||passenger.age>65) this.price*=0.8 
    return {Reservation,Flight}
  }
}