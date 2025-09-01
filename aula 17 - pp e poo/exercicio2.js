
// 2. Introduction to Classes
// --------------------------
// Create a class Product with:
// - properties: name, price
// - method: describe() returning a string like "Product: Rice, Price: $12"
// Test by creating a few products (e.g., Rice, Beans, Milk)

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  describe() {
    return `${this.name}, Price: $${this.price}`;
  }
}

const product1 = new Product("Rice", 2.00);
const product2 = new Product("Beans", 3.00);
console.log(product1.describe());
console.log(product2.describe());


// --------------------------