module.exports = (app, texto) => { // Retorno implicito
    function salvar(req, res) {
        res.send('Produto > salvar > ' + texto)
    }

    function obter(req, res) {
        res.send('Produto > obter >' + texto)
    }

    // Só consegui coloca o app por que em modules ele é exportado. no Inicio.
    app.post('/produto', salvar) 
    app.get('/produto', obter)

    return { salvar, obter} // -> Retornar para utilizar em outras funções
}

