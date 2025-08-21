function calcular(a, b, operacao) {
    if (operacao === "+") {
        return a + b;
    } else if (operacao === "-") {
            return a - b;
    } else if (operacao === "*") {
        return a * b;
    } else if (operacao === "/") {
        return a / b;
    } else {
        return "Operação inválida";
    }
}

console.log(calcular(5, 4, "+"));