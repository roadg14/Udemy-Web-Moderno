// Primeira estrategia de gerar um valor padrão.
function soma1(a, b, c){ // esses " || " -> Isso se chama "OU".
    a = a || 1 // Esse " || " ele ai está dizendo que se não declararem nenhum numero para a b ou c ele vai ser 1 então fica assim. a = 0 ou || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(2, 4, 6));
// Utilizando o mesmo console.log eu consigo da outros somas e dando um numero especifico para cada variavel.

function soma2(a, b, c){
    a = a != undefined ? a : 1 // Modo correto de se fazer "a = isNaN(a) ? 1 : a"
    b = 1 in arguments ? b : 1 // Modo correto de se fazer "b = isNaN(b) ? 1 : b"
    c = isNaN(c) ? 1 : c // Modo correto de se fazer "c = isNaN(c) ? 1 : c"
    return a + b + c
}
console.log(soma2(), soma2(1, 2, 3), soma2(0, 0, 0));

// Valor padrão do Es2015.

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(2, 3, 5), soma3(0, 0, 0));
// Essa forma é bem reduzida.
// Recusos extremamentes utilizado.
