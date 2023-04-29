/*reto84
En este desafío tendrás que construir un organizador de tareas para planificar tus actividades diarias junto con sus correspondientes etiquetas.
Debes crear un closure que use Maps y Sets para devolver 2 funciones:
addTask(task, tags): esta función te ayudará a agregar tareas al Map. Es importante que conviertas todas las letras de la tarea en minúsculas usando toLowerCase para verificar si la tarea existe. En caso de que exista, solo se agregarán las nuevas etiquetas como un Set, en caso contrario, se crearán desde cero.
printTasks(): esta función te devolverá todas las tareas creadas con sus etiquetas.
*/
  
export function taskManager() {
  const tasks = new Map()
  return {
    addTask(task, tags) {
    task = task.toLowerCase()
    if (!tasks.has(task)) tasks.set(task, new Set(tags))
    else tags.forEach(tag => tasks.get(task).add(tag))
    },
    printTasks() {return tasks}
  }
}


//Ejemplo 1:
//Input:

const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);



//Output:
//Map(3) { "comprar leche" → Set(2), "sacar al perro" → Set(1), "hacer ejercicio" → Set(1) }

//Ejemplo 2:
//Input

//const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["cuerpo"]);
myTaskManager.addTask("Comprar leche", ["lácteos"]);
myTaskManager.printTasks();
 nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); }; 

//Output:
//Map(3) { "comprar leche" → Set(3), "sacar al perro" → Set(1), "hacer ej