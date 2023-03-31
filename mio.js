function createTaskPlanner() {
  // Tu código aquí 👈
  let tasks=[];
  return {
     addTask(task) //recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
     {task.completed=false;
        tasks.push(task);
    },
     removeTask(value) //recibe el id o nombre de la tarea y lretura elimina del array de tareas.
     {if (typeof value ==='number')
      tasks=tasks.filter(x=>x.id!==value)
      else 
      tasks=tasks.filter(x=>x.name!==value)
   },
     getTasks:()=>tasks,//: Devuelve el array de tareas.
     getPendingTasks()//: Recibe el id o nombre de la tarea y la marca como completada.
     {tasks=tasks.filter(x=>!x.completed)},
     getCompletedTasks()//: Recibe el id o nombre de la tarea y la marca como completada.
     {tasks=tasks.filter(x=>x.completed)},
     markTaskCompleted(value)//: Recibe el id o nombre de la tarea y la marca como completada.
     {
      tasks=tasks.map(task=>{
         if (task.id==value||task.name==value)
            task.completed=true;
         return task
      })
   },

     getSortedTasksByPriority:function()//: Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
    {
      return [...tasks].sort((a,b)=>a.priority-b.priority)
    },
     filterTasksByTag:function(tag)//: Filtra las tareas por una etiqueta específica.
     {return tasks.filter(x=>x.tags.includes(tag))},
     updateTask(taskId, updates)//: Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.
     {let index=tasks.findIndex(x=>x.id==taskId)
      tasks[index]={...tasks[index],...updates}
   }
  }
}

let tarea=createTaskPlanner();
tarea.addTask({id:1,name:"hd",priority:5,tags:["bueno","regular","malo"]})
tarea.addTask({id:2,name:"tid",priority:2,tags:["regular","malo"]})
// tarea.removeTask("tid")
//tarea.markTaskCompleted(1)
// tarea.getCompletedTasks()
tarea.getPendingTasks()
tarea.getSortedTasksByPriority().forEach(element => {
   console.log(element)
});
tarea.getTasks().forEach(element => {
   console.log(element)
});
tarea.filterTasksByTag("bueno").forEach(e=>console.log(e))

tarea.updateTask(1,{name:"Hiver tai",priority:3,tags:["regular","malo","Perfecto"]})
tarea.getTasks().forEach(e=>console.log(e))