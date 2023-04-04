export function validateForm(formData, registeredUsers) {
    // Tú código aquí 👈
    let vacios=[]
    for (const [key, value] of Object.entries(formData)) {
        if (value==='') vacios+=key
      }

    let b = ["name", "lastname", "email", "password"];
    let a = Object.keys(formData)
    let faltan = b.filter((x) => !a.includes(x))
    const duplicado = registeredUsers.find((valor) => valor.email == formData.email)
    if (vacios.length){ 
    if (duplicado)
      throw new Error(`Email duplicado:${duplicado.email}`)
    registeredUsers.push(formData)
    return `El registro fue exitoso ${formData.name} ${formData.lastname}`
    }
    else 
    if (faltan.length)
      throw new Error(`Faltan los siguientes campos:${faltan}`)
      else 
      throw new Error(`Faltan llenar los siguientes campos:${llenos}`)
}
  /* 
  
  1. La función debe verificar que todos los campos requeridos del formulario 
  (name, lastname, email y password) 
  estén completos, si falta algún campo, debe lanzar un error especificando los campos faltantes.
  Para lanzar dicho error debes usar la siguiente sintaxis throw new Error("Faltan los siguientes campos: name, email, etc...");
  2. Además, la función debe verificar si el email ingresado ya existe en la lista de usuarios registrados. Si el email ya está en uso, debe retornar un error especificando el email duplicado.
  3. Si todo está correcto, se debe agregar el usuario a la lista de usuarios registrados con todos los datos excepto la contraseña y retornar un mensaje indicando que el registro fue exitoso junto con el nombre y apellido del usuario.
  
  Ejemplo 1
Input:
    const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456"
  }
  
  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ]
  
  validateForm(formData, registeredUsers)
  
  Output:
  "Tu registro fue exitoso Juan Perez"
  
  Ejemplo 2
  Input:
  const formData = {
    name: "Juan",
    password: "123456",
  };
  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ]
  validateForm(formData, registeredUsers)
  
  Output:
  "Faltan los siguientes campos requeridos: lastname, email"*/   

  const formData = {
    name: "Juan",
   lastname: "",
    email: "juan@example.com",
   password: "123456"
  }
  
  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
    //{ name: "Maria", lastname: "Garcia", email: "juan@example.com" },
  ]
  
 console.log(validateForm(formData, registeredUsers))
  