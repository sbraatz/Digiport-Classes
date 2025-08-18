// Objects are a way to store data in key-value pairs.
// Example: bird = {
//   name: "Sparrow",
//   age: 1,
//   sings: true,
// };

// Exercises:

// 1. Simple object
// Make an object 'cat' with 'name', 'color', and 'age'.
// Show the values in the console.


let cat = {
  name: "luna",
  color: "black",
  age: 4,
};

console.log(cat.name, cat.color, cat.age);


// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.

cat.toy = "ball of yarn";
cat.age = 5;

// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".

let dog = {
    name: "Marley",
    breed: "Labrador",
    bark: function () {
        return "woof";
    },  
}
console.log(dog.bark()); //Call the bark method


// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

let market = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 2.0 },
    { name: "Cherry", price: 2.5 },
];

for(let i = 0; i < market.length; i++){
    console.log("Product: " + market[i].name + ", Price: $" + market[i].price);
}


// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.


// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.

/*let scores = {
    Alice: 5,
    Bob: 7,
    Charlie: 4,
};
for(let i=0; i<scores.length; i++){
    console.log("Total: " + scores[i])
}
    */

