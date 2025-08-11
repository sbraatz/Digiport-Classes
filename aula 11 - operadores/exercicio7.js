const prompt = require('prompt-sync')();

let saldo = 1000;
let running = true;

while (running) {
    console.log("\nMenu de Atendimento");
    console.log("1. Verificar saldo");
    console.log("2. Falar com atendente");
    console.log("3. Sacar");
    console.log("4. Sair");

    let escolha = prompt("Escolha uma opção: ");

    switch (escolha) {
        case '1':
            console.log("Seu saldo é: R$${saldo}');
                
    }
}