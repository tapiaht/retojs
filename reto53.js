/*Implementa la lógica para proteger un objeto de cambios.

reciba como parámetro los datos de un perro como objeto.
crear una copia del objeto original utilizando el método Object.assign, 
almacenarla en una variable y 
luego congelar la copia utilizando el método Object.freeze para evitar cualquier cambio en sus propiedades, incluyendo los objetos anidados.

De esta manera, el objeto original no se verá afectado y todos los objetos anidados también serán protegidos de ser modificados.

export function protectDog(dog) {
  const nuevoObjeto = Object.assign({}, dog);
  Object.freeze(nuevoObjeto);
  return nuevoObjeto
}

export function protectDog(dog) {
  for (let property of Object.keys(dog)) {
    Object.freeze(dog[property]);
  }
  let dog_copy = Object.freeze({ ...dog });
  return dog_copy;
}
*/
export function protectDog(dog) {
  const copy = Object.assign({}, dog);
  const propertiesToProtect = ["owner", "favoriteFood", "activities"];

  function freezeRecursively(obj) {
    Object.freeze(obj);
    for (const prop of Object.getOwnPropertyNames(obj)) {
      if (propertiesToProtect.includes(prop) && typeof obj[prop] === "object") {
        freezeRecursively(obj[prop]);
      }
    }
  }

  freezeRecursively(copy);
  return copy;
}

 protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

protectedDog.owner.name = "Pedro"
console.log(protectedDog.owner.name)
