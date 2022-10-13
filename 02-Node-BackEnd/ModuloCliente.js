const moduloA = require("./ModuloA.js") // Modo de chama um outro modulo. isso é importação.
const moduloB = require("./ModuloB")

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite()); // Tem que chama com os parentesis, por que o 'boaNoite' é uma função