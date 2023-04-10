export class Passenger {
    constructor(name,lastName,age){
      this.name=name
      this.lastName=lastName
      this.age=age
      this.flights=[]
    }
    addFlight(origin, destination, date, price){
      this.flights={origin:origin, destination:destination, date:date, price:price}
    }

  }