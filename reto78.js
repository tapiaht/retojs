/*reto 78
En este desafío, tendrás la oportunidad de desarrollar tus habilidades al construir tu propio array mediante el uso de clases.

Tu objetivo es crear una clase que sea similar a un array nativo del lenguaje, pero sin utilizar métodos ya existentes.

Entre los métodos disponibles en los arrays nativos, solo deberás implementar la lógica de los siguientes: map, filter, join, push, pop, shift, y unshift.

No podrás usar los corchetes [], aquí entenderás porque los arrays se consideran objetos ¡Buena suerte!
*/
export class MyArray {
  constructor() {
    this.data={}
    this.length=0
    
  }

  map(func) {
    let newObj=new MyArray
    for (let item in this.data){
      newObj.data[item]=func(this.data[item])
      newObj.length++
    }
    return newObj
  }

  filter(func) {
    let newObj=new MyArray
    for (let item in this.data){
      if (func(this.data[item])){
      newObj.data[ newObj.length]=this.data[item]
      newObj.length++
      }
    }
    return newObj
  }

  push(item) {
    this.data[this.length]=item
   return this.length+=1
  }

  pop() {
    if (this.length>0){
    let last=this.data[this.length-1]
    delete this.data[this.length-1]
    this.length-=1
    return last
    }
  }

  join(character = ",") {
    let chain=''
    for (let item in this.data){
      chain+=this.data[item]+character
      //chain= `${chain}${character}${this.data[item]}`;
    }
    chain=chain.slice(0, -1);
    return chain
  }

  shift() {
    let tmp=this.data[0]
    delete this.data[0]
    this.length-=1
    for (let i = 0; i < this.length; i++) {
      const nextElement = this.data[i + 1];
      this.data[i] = nextElement;
    }

    delete this.data[this.length];
    return tmp
  }

  unshift(item) {
    //let a=this.push(item)
    let new_obj = {...this.data}
    this.data={}
    this.data[0]=item
    for (let i=1;i<this.length+1;i++){
      this.data[i]=new_obj[i-1]
    }
    this.length++;
    return this.length;
  }
}


//Ejemplo 1:
//Input:

const myArray = new MyArray()


myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
//myArray.shift();
//myArray.pop();
//myArray.unshift(5)
//console.log(myArray.filter(x=>x%2==0));
//console.log(myArray.data)
myArray.join();

//Output: { 0: 1, 1: 2, 2: 3 }

//Ejemplo 2:
//Input:

//const myArray = new MyArray()
/*
myArray.push("Platzinauta");
myArray.unshift("Hola!")
console.log(myArray.data)

//Output: { 0: "Hola!", 1: "Platzinauta" }
*/