// Função sem retorno.
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5);

imprimirSoma(2);
imprimirSoma(2, 5, 6, 9, 9, 0);// Mesmo colocando varios números a soma só vai acontecer entre os dois primeiros que foram selecionados.
imprimirSoma()

//Função com Retorno.

function soma(a, b = 0){// function soma(a, b = 1) //
    return a + b;
}

console.log(soma(2 + 5));
console.log(soma(2));// b foi informado = 0 então ela vai imprimir apenas o valor de a.
console.log(soma());