// Armazenando uma função em uma variavel.
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3); // Mesma Funcionalidade que está em FUNÇÃOBASICOS1.

//Armazenando uma função arrow em uma variavel.

const soma = (a, b) => {
    return a + b;
}
console.log(soma(4, 6));

// Retorno implícito.
const subtracao = (a, b) => a - b;
console.log(subtracao(3, 6));

const imprimirSubtracao = function (a, b) {
    return a - b;
}
console.log(imprimirSubtracao(2, 5));// a mesma forma da soma. se encaixar em varios tipos de equações.

const imprimir2 = a => console.log(a);// Forma vem mais simplificada.
imprimir2('Douglas!!!')


//Forma de Multiplicação.
const imprimirMultiplicacao = function (a, b){
    return a * b;
}
console.log(imprimirMultiplicacao(4, 3));