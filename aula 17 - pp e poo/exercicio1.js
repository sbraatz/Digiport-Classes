// --------------------------
// 1. Discount Function
// --------------------------
// Create a function `discount10(price)` that receives a price
// and returns the price after applying a 10% discount.

let price = 100;
let discount = 0.1;
let discounted = price * discount;
function discount10(price) {
  return (price - discounted)
}

console.log(discount10(price));


// --------------------------
