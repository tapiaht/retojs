/* reto80
En este desafío, debes construir una lista de contactos mediante una hashTable.
Tu objetivo será el de implementar la lógica de la clase ContactList para agregar contactos y realizar las operaciones correspondientes.
La hashTable (ContactList) deberá tener los siguientes métodos:
insert(name, phone): este método recibirá el nombre y el número de teléfono de un contacto, y agregará este último a la hashTable.
get(name): este método recibirá el nombre de un contacto y devolverá su número de teléfono. Si el contacto no existe, retornará null.
retrieveAll(): este método devolverá un array con todos los buckets utilizados en la hashTable.
delete(name): este método recibirá el nombre de un contacto y eliminará dicho contacto de la hashTable, en caso de no encontrar el name debe retornar null.
El código original ya tiene una implementación del método hash por lo que no te tienes que preocuparte por ello.
*/
export class ContactList {
  constructor(size) {
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }
  hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.numBuckets;
  }
  insert(name, phone) {
    let index = this.hash(name)
    if (!this.buckets[index]) this.buckets[index] = []
    this.buckets[index].push([name, phone]);
  }
  get(name) {
   let index = this.hash(name);
   if (!this.buckets[index])	return null
   return this.buckets[index].find(value => value[0] === name)[1] 
  }
  retrieveAll() {
   return this.buckets.filter(b => b.length > 0).flat()
  }
  delete(name) {
   let index = this.hash(name);
   if (!this.buckets[index]) return null
   delete this.buckets[index]
  }
}

//Ejemplo 1:
//Input:

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")
contactList.insert("Mr burro", "321-654-0987")
//contactList.delete("Mr michi")
contactList.get("Mr michi")
//contactList.retrieveAll()

//Output: [["Mr michi", "123-456-7890"]]

//Ejemplo 2:
//Input:
/*
const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")

contactList.get("Mr Michi")

//Output: "123-456-7890"

//Ejemplo 3:
//Input:

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")
contactList.delete("Mr michi")

contactList.get("Mr Michi")

//Output: null
*/