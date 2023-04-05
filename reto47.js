export function processShoppingList(list) {
  // Tu código aquí 👈
  let total=0
  for (const [key, item] of Object.entries(list)){ 
    if (item.name.includes("oferta")) item.price*=0.8     
    item.price*=item.quantity
    total+=item.price
    delete item.quantity
  }
  return total
}

const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

processShoppingList(shoppingList)

//Output: 89
const shoppingList1 = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

processShoppingList(shoppingList1)

console.log(shoppingList1)

// El array original debe ser modificado
/*
Output:
[
  { name: "pan", price: 40 },
  { name: "leche", price: 25 },
  { name: "oferta manzanas", price: 24 },
]
*/