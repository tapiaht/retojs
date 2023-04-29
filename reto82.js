/* Reto 82
En este desafío deberás remover los elementos duplicados de un array.
La función removeDuplicates recibirá un array con elementos que pueden ser números o strings y que contienen elementos repetidos. Tu objetivo es implementar la lógica necesaria para quitar estos elementos repetidos y mantener el orden original de aparición de los elementos en el array.
*/
export function removeDuplicates(values) {
  /*let set = new Set();
  values.forEach(item=>set.add(item))
  return Array.from(set)*/
  return [...new Set(values)];
}

//Ejemplo 1:
//Input:

const fruits = [
  "melon",
  "melon",
  "mango",
  "banana",
  "apple",
  "banana",
  "apple",
];

console.log(removeDuplicates(fruits))

//Output: ["melon", "mango", "banana", "apple"]

//emplo 2:
//Input:

const numbers = [1, 2, 3, 1, 2, 3];

console.log(removeDuplicates(numbers))

//Output: [1, 2, 3]