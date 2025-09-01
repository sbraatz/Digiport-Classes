
// --------------------------
// 3. Cart Class + Methods
// --------------------------
// Create a class Cart with:
// - property: products (array)
// - method: add(product) to add a Product
// - method: total() to return the sum of all product prices
// - method: showProducts() to return a string listing all products
// - method: applyDiscount() that applies the `discount10` function
//   to all products' prices using the function you created above
let price = 100;
let discount = 0.1;
let discounted = price * discount;
function discount10(price) {
  return (price - discounted)
}

console.log(discount10(price));
class Cart {
  products = [];

  add(product) {
    this.products.push(products);
  }

  total() {
    return ;
  }

  showProducts() {
    return this.products.map(b => b.describe()).join("\n");
  }

  applyDiscount() {
    // implement: use discount10 function for all products
  }
}

// --------------------------
