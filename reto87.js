/*Reto 87
En este ejercicio práctico, crearás métodos adicionales para una singly linked list.
Para este ejercicio, deberás implementar la lógica de algunos métodos de LinkedListRecharged que heredará de un LinkedList (SinglyLinkedList.js) previamente creada.
Los métodos que deberás implementar son los siguientes
get(index): este método recibirá un index y retornará el valor del nodo en la posición buscada, en caso de recibir un index invalido este retornará null.
insertAt(index, value): este método inserta un valor en la posición especificada.
toArray(): Tomará todos los valores de la singly linked list y los retornará en un array.
removeAt(index): este método elimina el nodo en el index especificado y retorna el valor.
Las pruebas harán uso del método toArray() para comparar resultados.
*/

// Este código no debe ser modificado ❌
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}
export class Node {
  // Este código no debe ser modificado ❌
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedListRecharged extends LinkedList {
  get(index) {
    if (index<0||index>this.length-1) return null;
     let current = this.head;
    for (let i=0;i<index;i++) {
       current=current.next;
      }   
    return current.value 
  }
  insertAt(index, value){
    let newnode=new Node(value)
    if (index<0||index>this.length-1){
      return null
    }
    if (index===0){
      this.prepend(value)
      return; 
    }
    if (index==this.length-1){
      this.append(value)
      return;
    }
    let current=this.head
    let previo
    for (let i=0;i<this.length-1;i++){
      if (i==index){
        newnode.next=current
        previo.next=newnode
        return;
      }
      previo=current
      current=current.next
    }
      
  }

  toArray(){
    let array=[]
    let current=this.head
    while (current){
      array.push(current.value)
      current=current.next
    }
    return array
  }

  removeAt(index){
     if (!this.head) return null
    if (index<0||index>this.length){
      return null
    }
    if (index==0){
      let first=this.head.value
      this.head=this.head.next
      this.length--
      return first
    }
    let current=this.head
    let counter = 0;
    while (counter != index - 1) {
      current = current.next;
      if (current.next === null) {
        return null;
      }
      counter++;
    }
    let deleted = current.next.value;
    current.next = current.next.next;
    this.length--;
    return deleted;
  }
}

//Ejemplo 1:
//Input:
const linkedList = new LinkedListRecharged();
//El método append ya se encuentra implementado por lo que no debes preocuparte
//linkedList.append("30");
//linkedList.append("Días");
//linkedList.append("De javascript");
//linkedList.get(1)

//Output:"Días"

//Ejemplo 2:
//Input:
//const linkedList = new LinkedListRecharged();

linkedList.append(0);
linkedList.append(1);
linkedList.append(2);
linkedList.insertAt(2, 5)

linkedList.toArray()

//Output:[1, 5, 2, 3]

//Ejemplo 3:
//Input:
//const linkedList = new LinkedListRecharged();

linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

linkedList.removeAt(0);

linkedList.toArray()

//Output:[1, 3]