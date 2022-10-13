// Função de Primeira Ordem.
// Função em JS é First-Class Object (Citizens).

// Criar de forma literal.
function fun1() { }

// Armazena em uma variavel.

const fun2 = function() { }

// Armazena em uma Array.

const array1 = [function (a, b) { return a + b}] // Uma forma de deixa dentro de uma array.
const array = [ function(a, b){return a + b}, fun1, fun2] // Também posso coloca uma que seja ja em function ou se estiver dentro de uma const.
console.log(array1[0](1, 9)); // como de como chama uma array.
console.log(array[0](3, 8));

// Armazena em um Atributo de Object.
const obj = {}
obj.falar = function () {return "Opa"}
console.log(obj.falar())

// Passar função como param

function run (fun) {
    fun() // Sem as () ele não chama a função.
}
run(function(){ console.log("Executando...")});

// Uma função pode Retorna ou Conter uma função.

function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}
soma(3, 5)(6) // Esses são os parametros para essa function de rerturn.]
const cincoMais = soma(3, 5)
soma(6) // Chamando a o C depois que ja decidimos os numeros.

// Uma outra forma de fazer somas  já anunciando as variaveis antes ou depois você quem decide.

let a = 4;
let b = 6;
function soma(a, b){
    return function (c) {
        console.log(a + b + c);
    }
}
soma(a, b)(7)