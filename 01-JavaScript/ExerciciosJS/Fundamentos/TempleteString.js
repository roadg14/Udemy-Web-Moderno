const nome = "Douglas";
const concatenacao = "Olá " + nome + "!";
const template = `
    Olá 
    ${nome}!`// ${} <- Template: usando desse jeito ele quebra a linha.

console.log(concatenacao, template);

//Expressões... Soma e mais.

console.log(`1 + 1 = ${1 + 1}`); // Usando ${} <-- Esse comando com Equações.

const up = texto => texto.toUpperCase(); //Usando essa forma base para deixar as palavras tudo em Maiusculo.
console.log(`Ei... ${up("douglas rodrigues ferreira campos")}!`); //Essa é a forma que voce vai usar para aplicar essa variavel.