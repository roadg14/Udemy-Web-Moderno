const contadorA = require("./InstanciaUnica")
const contadorB = require("./InstanciaUnica")

const contadorC = require("./InstanciaNova")()
const contadorD = require("./InstanciaNova")()

contadorA.inc() // Chamamos esse contador 2 vezes, e no console.log -> Ele somou com o contadorB que é o valor tambem é 1.
contadorA.inc()
console.log(contadorA.valor, contadorB.valor);

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor);