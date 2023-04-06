export function hotelSystem(rooms) {
  let reservas=[]
  function searchReservation(id){
    let buscado=reservas.find(x=>x.id==id)
    if (!buscado) throw new Error("La reservación no fue encontrad")
    else return buscado
  }
  function stringToDate(str) {
    // Expected format "dd/mm"
    const [day, month] = str.split("/");
    const year = new Date().getFullYear();
    const date = Date.parse(`${month}/${day}/${year}`);
    return date;
  }
  function getSortReservations(){
  //fecha de check-in de manera ascendente.
    
    let copiareservas=[...reservas].sort((a,b)=>{
      let fa=stringToDate(a.checkIn);
      let fb=stringToDate(b.checkIn);
      return fa-fb})
    return copiareservas
  }

  function addReservation(reservation){
  //disponible para las fechas de check-in y check-out. Si esta reservada -> un error "La habitación no está disponible".
     if (!isAvailable(reservation)) {
      throw new Error("La habitación no está disponible");
    }
    reservas.push(reservation)
    return "Se ha reservado correctamente!!"
  }
  function removeReservation(id){
  //la retornará. si no exista -> error .
    let buscado=reservas.find(x=>x.id===id)
    if (buscado)
      {
      reservas=reservas.filter(x=>x.id!==id)
      return buscado
      }
    else 
    throw new Error("La reservación que se busca remover no existe");
  }
  
  function getReservations(){
  //todas las reservaciones.
    return reservas
  }
  function isAvailable(reserva) {
    let resIn = reserva.checkIn;
    let resOut = reserva.checkOut;

    for (let actRes of reservas) {
      let actCheckIn = actRes.checkIn;
      let actCheckOut = actRes.checkIn;

      if (
        (resIn >= actCheckIn && resIn < actCheckOut)
        ||
        (resOut > actCheckIn && resOut <= actCheckOut)
        ||
        (resIn <= actCheckIn && resOut >= actCheckOut)
      ) {
        if (actRes.roomNumber === reserva.roomNumber) {
          return false;
        }
      }
    }
    return true;
  }
  function getAvailableRooms(checkIn, checkOut){
    let disponibles=[]
    for (let i = 1; i <= rooms; i++)
      {
        let reservab={checkIn:checkIn,checkOut:checkOut,roomNumber:i}
        if (isAvailable(reservab)) disponibles.push(i)
      }
    return disponibles
  }
 return {
   searchReservation,
   getSortReservations,
   addReservation,
   removeReservation,
   getReservations,
   getAvailableRooms
 }

}
const hotel = hotelSystem(10);

// Agregar una nueva reservación

/*
hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 3,
  name: "Hiver Tapia",
  checkIn: "07/02",
  checkOut: "02/03",
  roomNumber: 5,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "06/01",
  roomNumber: 7,
});

hotel.addReservation({
  id: 4,
  name: "Marta Soy",
  checkIn: "01/03",
  checkOut: "02/03",
  roomNumber: 9,
});
//hotel.getReservations();
/*
Output:
[
  {
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
  }
]
*/

// Buscar una resevación hecha
//hotel.searchReservation(1);
/*
Output:
{
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
}
*/
//hotel.removeReservation(1);
//hotel.getReservations();
//hotel.getSortReservations()


hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
});
hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/02",
  checkOut: "10/02",
  roomNumber: 9,
});
hotel.getAvailableRooms("01/01", "05/01")