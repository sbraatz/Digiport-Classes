// script que leia 3 números inteiros e mostre o menor e o maior deles

let num1 = 10000;
let num2 = 5;
let num3 = 1;

let maior = num1; 
let menor = num1;

if (num2 > maior) {
    maior = num2;
}
if (num3 > maior) {
    maior = num3;
}

if (num2 < menor) {
    menor = num2;
}
if (num3 < menor) {
    menor = num3;
}

console.log("Maior número", maior);
console.log("Menor número", menor);



