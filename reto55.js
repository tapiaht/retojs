/*En este desafío, deberás crear tu propia implementación de filter para el prototype de los arrays.
Esto implica agregar un nuevo método llamado myFilter al prototype de los arrays, el cual permitirá filtrar elementos de manera similar al método filter nativo del lenguaje. El objetivo es poder usar el método myFilter de la siguiente manera:

*/
export function arrayModified() {
  // Tu código aquí 👈
  Array.prototype.myFilter=function(fn){
    const ar=[]
    for (let item of this)
      if (fn(item)) ar.push(item)
    return ar
  }
}
arrayModified()

const array = [
  {
    name: "Juan",
    age: 10,
  },
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
];

array.myFilter((person) => person.age > 18)
/*Output: [
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
]*/