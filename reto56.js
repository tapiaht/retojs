/*En este desafío, deberás crear la lógica para un automóvil mediante el uso de clases.
Deberás implementar la lógica necesaria en la clase Car de tal manera que nos pueda servir de base para crear nuevos autos que reciba los siguientes parametros:
brand: Marca del auto
model: Modelo del auto
year: Año del auto
mileage: kilometraje del auto
state: El estado por defecto del auto será false, indicando que el auto se encuentra apagado.
Además, deberás implementar los siguientes métodos para hacer funcional los vehículos creados con la clase Car
*/
class Car {
    constructor(brand,model,year,mileage,state) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
      this.state = false;
    }
     turnOn(){
        this.state=true;
      }
     turnOff(){
      this.state=false;
    }
     drive(kilometers){
      if (!this.state) throw new Error("El auto está apagado")
       this.mileage=kilometers;
    }
  }
const toyota = new Car("Toyota", "Corolla", 2020, 0);
toyota.turnOn();
toyota.drive(100);
toyota.mileage

//Output: 100

const toyota1 = new Car("Toyota", "Corolla", 2020, 0);
toyota1.turnOff()
toyota1.drive(100)

//Output: Error("El auto está apagado")