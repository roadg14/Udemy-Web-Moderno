const sequence = { // Aqui ele sempre vai retorna o proximo id, como se fosse uma calculadora uma soma.
    _id: 1,         // isso vai numerando os produtos que foram adicionados no caso 1 2 3 4 assim por diante.
    get id() { return this._id++ }
}

const produtos = {} // Esse comando eu vou definir cada id que será chamado 

function salvarProduto(produto) { // aqui é uma linha de comando para adiciona o "id" ao produto novo que se não tiver vai ser adicionado.
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) { // Buscar por com ou sem pelo id
    return produtos[id] || {} // Caso não venha com id e esteja nulo ele trará nada = vazio
}

function getProdutos() {
    return Object.values(produtos) // Um retorno de todos os valores que estão no 'ObjetoProduto'
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos }