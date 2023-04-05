export function groupProducts(products, category) {
  // Tu código aquí
  let productos = ''
  let total=0
  
  for (let value of products) {
        if (value.category==category)
          {
            total+=value.price
          productos+=value.name+', '
          }
      }
  productos=productos.slice(0, -2);
  return {products:productos,totalPrice:total}  
}
const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

groupProducts(products, "Electronics")