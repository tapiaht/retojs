export function sortByAvailabilityAndPrice(products) {
  return [...products].sort((a, b) => (b.inStock - a.inStock ||  a.price - b.price));
}
const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
]

sortByAvailabilityAndPrice(products)
/*
Output:
[
  { name: "product1", price: 10, inStock: true },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
  { name: "product2", price: 20, inStock: false },
]
https://picsum.photos/200/300
  return [...products].sort((a, b) =>
    a.inStock > b.inStock ? -1 :
      a.inStock < b.inStock ? 1 :
        a.price > b.price ? 1 :
          a.price < b.price ? -1 : 0
  );
*/
