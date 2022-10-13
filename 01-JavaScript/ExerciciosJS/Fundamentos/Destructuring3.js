function rand({ min = 0, max = 1000}) { // Chamando números aleatorios.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}
const obj = {max: 50, min: 30};
console.log(rand(obj));
console.log(rand({ min: 855}));

function cont({ min = 0, max = 1000}){
    const valor = Math.random() * ( max - min) -min
    return Math.floor(valor);
}
const objt = {max: 1000, min: 0};
console.log(cont(objt));
console.log(cont({min: 10}));