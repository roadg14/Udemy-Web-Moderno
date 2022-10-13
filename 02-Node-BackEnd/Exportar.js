console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports.b = null  // se eu informa o mesmo atribudo ele substitui.
console.log(module.exports) // Ele só vai chama quando voce atribuir alguma coisa para ele no casa um ' .ATRIBUIÇÃO '