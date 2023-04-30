/*reto 88
En este desafío, tu objetivo es implementar una singly linked list para almacenar información sobre pacientes de un hospital. Cada nodo de la lista representará a un paciente y tendrá los siguientes campos:

Nombre del paciente (string)
Edad del paciente (number)
Número de cama asignada al paciente (number)
La lista deberá tener los siguientes métodos:

addPatient(name, age): agrega un nuevo paciente a la lista, asignándole la próxima cama disponible. Si no hay camas disponibles, debe lanzar un error con el mensaje "No hay camas disponibles".

removePatient(name): remueve al paciente con el nombre especificado de la lista y libera su cama. Si el paciente no se encuentra en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

getPatient(name): retorna la información del paciente con el nombre especificado en el siguiente formato { name, age, bedNumber }. Si el paciente no se encuentra en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

getPatientList(): retorna una lista con la información de todos los pacientes en la lista, cada paciente deberá tener el siguiente formato { name, age, bedNumber }.

getAvailableBeds(): retorna un número con el total de camas disponibles.

Recuerda usar la sintaxis throw new Error() para los errores

Aquí tienes una guía paso a paso de cómo implementar la singly linked list:
*/
export class Node {
  
  constructor(name, age, bedNumber) {
    this.name = name;
    this.age = age;
    this.bedNumber = bedNumber;
    this.next = null;
  }
}
export class PatientList {
  constructor(beds) {
    this.head = null;
    this.tail = null;
    this.bedsAvailable = Array.from({ length: beds });
    for (let i = 0; i < beds; i++) {
      this.bedsAvailable[i] = i + 1;
    }
  }

  addPatient(name, age) {
    if (this.bedsAvailable.length === 0) {
      throw new Error("No hay camas disponibles");
    }

    const newPatient = new Node(name, age, this.bedsAvailable[0]);
    this.bedsAvailable.shift();

    if (!this.head) {
      this.head = newPatient;
      this.tail = newPatient;
    } else {
      this.tail.next = newPatient;
      this.tail = newPatient;
    }
  }

  removePatient(name) {
    if (!this.head) {
      throw new Error("Paciente no encontrado");
    }
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.name === name) {
        if (!prev) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }

        this.bedsAvailable.push(current.bedNumber);
        return;
      }

      prev = current;
      current = current.next;
    }

    throw new Error("Paciente no encontrado");
  }

  getPatient(name) {
    let current = this.head;

    while (current) {
      if (current.name === name) {
        return {
          name: current.name,
          age: current.age,
          bedNumber: current.bedNumber,
        };
      }

      current = current.next;
    }

    throw new Error("Paciente no encontrado");
  }

  getPatientList() {
    const patients = [];
    let current = this.head;

    while (current) {
      patients.push({
        name: current.name,
        age: current.age,
        bedNumber: current.bedNumber,
      });

      current = current.next;
    }

    return patients;
  }

  getAvailableBeds() {
    return this.bedsAvailable.length;
  }
}
//Ejemplo 1:
//Input:
const list = new PatientList(9)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.getPatientList()
/*Output:
[
  { name: "Paciente 1", age: 20, bedNumber: 1 },
  { name: "Paciente 2", age: 30, bedNumber: 2 },
]
Ejemplo 2:
Input:*/
//const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.getPatient("Paciente 1")

/*Output:
{
  name: "Paciente 1",
  age: 20,
  bedNumber: 1,
}
Ejemplo 3:
Input:*/
//const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.removePatient("Paciente 1")

list.getPatientList()

/*Output:
[
  { name: "Paciente 2", age: 30, bedNumber: 2 },
]*/