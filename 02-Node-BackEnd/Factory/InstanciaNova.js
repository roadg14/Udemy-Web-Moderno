// Uma Factory faz retorna um novo objeto.
module.exports = () => {
    return {
        valor: 1,
        inc() { // " inc " => inc de incremento.
            this.valor++
        }
    }
}