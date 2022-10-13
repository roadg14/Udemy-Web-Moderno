// Função que retorna função Middleware
function saudacao(nome) {
    return function(req, res, next){
        console.log(`Seja Bem vindo! ${nome}! \n`)
        next()
    }
}

module.exports = saudacao // a exportação possa ser usada em outras chamadas.