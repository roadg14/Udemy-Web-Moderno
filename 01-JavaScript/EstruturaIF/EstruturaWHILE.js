function NumeroAleatorio(min, max) { // Formula de gerar um número aleatorio os numeros.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let numeros = 0;

while (numeros != -1) { // " While " enquanto a operação for verdadeira faça, o while faz isso.
    numeros = NumeroAleatorio(-1, 10)
    console.log("Opção escolhida foi", + numeros);
}

console.log("Até a proxima");



function OperaçãoAleatoria(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let num1 = 0;

while (num1 != -1) {
    num1 = OperaçãoAleatoria(-1, 10)
    console.log("Numeros escolhidos foram", + num1);
}
console.log("Até a proxima!");