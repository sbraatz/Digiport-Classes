const prompt = require("prompt-sync")();

const correctPassword = "1234";
let password = "";

while (password !== correctPassword) {
    password = prompt("Digite a senha correta");
}

console.log("Senha correta! Acesso concedido");
