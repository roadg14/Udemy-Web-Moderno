const { functions } = require("lodash");

console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log("Cuidado na tua vida visse viado");
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);

    this.perigo = "..."
}

logThis()

function Douglas() {
    console.log("Continuar estudando, você um dia vai ter tudo oque quer!");
    console.log("Se tu não fazer isso todos que você ama vai se decepciona com você");

}

Douglas()