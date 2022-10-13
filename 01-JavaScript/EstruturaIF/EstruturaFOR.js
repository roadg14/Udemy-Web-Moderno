// Formura para um contador.
let contador = 1;
while(contador <= 10) {
    console.log("Contador =", + contador);
    contador++
}
// Um contador usando o FOR.
for(let i = 1; i <= 10; i++ ) {
    console.log("i =", + i);
}
// Contador chamando as notas em Awarry.
const notas = [7.1, 8.8, 9.4, 8.7, 7.6, 9.9];
for(let i = 0; i < notas.length; i++) { // Utilizando o LET no inicio ele pode ser chamando fora pelo console.log().
    console.log("notas =", + notas[i]);
}