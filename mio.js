function createTaskPlanner() {
  // Tu código aquí 👈
  let tasks=[];
  return {
    create: function(){return 
        
     },
     addTask:function(task) //recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
     {task.completed=false;
        return tasks.push(tasks);
    },
     removeTask:function(value) //recibe el id o nombre de la tarea y la elimina del array de tareas.
     {return tasks.filter(x=>x.id!==value)},
     getTasks:tasks,//: Devuelve el array de tareas.
     getPendingTasks:function(value)//: Recibe el id o nombre de la tarea y la marca como completada.
     {return tasks.find()},
     getSortedTasksByPriority:function()//: Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
    {},
     filterTasksByTag:function(tag)//: Filtra las tareas por una etiqueta específica.
     {},
     updateTask:function(taskId, updates)//: Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.
     {}
  }
}
