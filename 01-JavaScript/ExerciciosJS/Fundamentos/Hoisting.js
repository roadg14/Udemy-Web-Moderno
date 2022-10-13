// O Hoisting ele joga as declarações com o VAR para cima, e pode gera alguns efeitos estranhos.
console.log("a =", a); //Hoisting, mesmo dando uma console.log e chamando uma variavel sem existe e anunciando,
var a = 3;// ela depois vai ser chamanada na proxima vez que for anunciado no console.log <= Um tipo de Exemplo.
console.log("a =", a);

function teste () { // Segundo tipo de exemplo utilizando a Function.
    console.log("a =", a);
    var a = 2;
    console.log("a =", a);
}
teste()

for ( let i = 0; i < 10; i++){
    console.log("2 x", i );
}