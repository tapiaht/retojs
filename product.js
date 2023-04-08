export class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    addToCart() {
      throw new Error(
        "La lógica de este método debe ser implementada por las clases hijas"
      );
    }
  }
  