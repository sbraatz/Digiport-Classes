const prompt = require('prompt-sync')()

let verdes = 0
let vermelhas = 0
for (let i = 0; i < 10; i++) {
    let fruta = prompt("Qual a cor da fruta? ")

    if (fruta.toLowerCase() == "vermelha" ) {
        vermelhas++
    }    else if (fruta.toLowerCase() == "verde") {
            verdes++
        
    }
}

console.log(`Quantidade de frutas vermelhas: ${vermelhas}`);
console.log(`Quantidade de frutas verdes: ${verdes}`);


