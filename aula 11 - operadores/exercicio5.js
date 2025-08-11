const prompt = require("prompt-sync")();

let sum = 0;
let number = 0;

while (number >= 0) {
    number = parseInt(prompt("Digite um número positivo (ou um número negativo para parar):"));
    if (number >= 0) {
        sum += number;
    }
}
console.log("A sma dos números inseridos é: ", sum);
