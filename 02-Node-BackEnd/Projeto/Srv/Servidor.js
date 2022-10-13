const porta = 3003 // Servidor essa é uma definição de porta.

const express = require('express') // Como chamar o express
const app = express()
const bodyParser = require('body-parser')
const BancoDeDados = require('./BancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) =>{ // Usando o "get para produtos" estamos querendo a lista que produtos tem.
    res.send(BancoDeDados.getProdutos()) 
})

app.get('/produtos/:id', (req, res, next) =>{ // "APP.GET" ele é uma busca geral, todos os itens que foram adicionados pelo post, ou tambem buscar pelo id usando o -> /
    res.send(BancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', ( req, res, next) =>{ // Como fazer um recebimento de dados de formularios e cadastros. 
    const produto = BancoDeDados.salvarProduto({ // "APP.POST" ele criar os itens e vai criando, só ir adicionando no modo post.
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Esse final vai gerar um arquivo.JSON para ir a Web.
})

app.put('/produtos/:id', ( req, res, next) =>{ // O "APP.PUT" ele alterar ou adicionar ao nome do produto ou algo que voce esqueceu de coloca.
    const produto = BancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res ,next) =>{ // "APP.DELETE" Esse aqui já é para Deleta igualdade se algum produto for igual.
    const produto = BancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`) 
})

// Dependencias "Body-parser", "Express", "Nodemon", "Node"
// npm i --save body-parser@1.18.2 -E
// npm i --save-dev nodemon@1.14.11 -E
// npm i --save express@4.16.2 -E
// npm i node-schedule@1.3.0 -E - Para Usa como temporizador.
// La no postman
