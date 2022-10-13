function salvar(req, res) {
    res.send('Usuario > salvar')
}

function obter(req, res) {
    res.send('Usuario > obter')
}

// Para que essas Funções fiquem visiveis.
module.exports = { salvar, obter }
// chave valor | === salvar: salvar, obter: obter