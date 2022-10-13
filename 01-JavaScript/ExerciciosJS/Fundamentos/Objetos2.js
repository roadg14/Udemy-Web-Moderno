console.log(typeof Object); // new ele muda de function para object. (Amostras abaixo).
console.log(typeof new Object); // esse é um modo de criar alguns Objectos.
console.log(typeof String);
console.log(typeof new String);

const Cliente = function () {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Douglas {}
console.log(typeof Douglas);
console.log(typeof new Douglas);