// Função Middleware - recebe requisição, resposta e next
// Ordem das funções define processamento
const express = require('express') // Importando o Express.
const app = express() // -> Uma variavel com construtor express.
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid') // Importando um arquivo saudacaoMid.js
const usuarioApi = require('./API/usuario') // Importando o arquivo usuario.js
const produtoApi = require('./API/produto') // Importando o arquivo produto.js 
produtoApi('./API/produto')(app, 'com param!') // url definida na função retornada do módulo produto.js

app.post('/usuario', usuarioApi.salvar) // Modo POST se o usuario digitar /usuario, eu ou chamar essa função.
app.get('/usuario', usuarioApi.obter) // Modo GET se ele chamar o mesmo usuario, eu vou usar o essa função obter

app.use(bodyParser.text()) // Qualquer texto no corpo da req será interpretado
app.use(bodyParser.json()) // Qualquer json no corpo da req será interpretado
app.use(bodyParser.urlencoded({ extended: true })) // Interpreta url enconded (ex: formulário)
// extended: true -> interpreta outros tipos de dados além da documentação padrão

// Foi chamar lá no arquivo -> saudacaoMid.js
app.use(saudacao('Guilherme')) // Interpreta como função Middleware.

app.get('/clientes/relatorio',(req, res) => { // Mesmo feito só quem com o query.
    // http://localhost:3000/clientes/relatorio?completo=true&ano=2018
    res.send(`Cliente relatóri: Completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {

    res.send(req.body) // Interpretar texto no corpo da req a partir do bodyParser
    // res.send(JSON.stringify(req.body))

    // Sem bodyParser

    // let corpo = ''
    // // Quando estiver chegando dados no corpo da requisição
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() { // Quando terminar de receber. res.send(corpo) - vai mandar de volta tudo que recebeu.
    //     res.send(corpo)
    // })
})

// :id -> pode mudar dentro da URL
app.get('/clientes/:id', (req, res) => { // Uma função que selecionar os Cliente com o Params.id.
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.use((req, res, next) => {
    console.log('Antes...')
    next() // Uma função que mandar ir para o Proximo. 'next()'
}) // Chama próxima função dentro da requisição p/ de mesma url

app.get('/opa',(req, res, next) => { // Requisisão e Resposta.  'use' -> ele atende a qualquer requisição.
    console.log('Durante...')
    res.json({ // Uma Array e transformando em Json.
        data: [
            {id: 1, name: 'Douglas', position: 1},
            {id: 2, name: 'Thiago', position: 2},
            {id: 3, name: 'Guilherme', position: 3}
        ],
        count: 30, // Pra dizer quantas paginas tem.
        skip: 0, // Quantas paginas foram puladas.
        limit: 3, // Limite das paginas. 
        status: 200 // Status 200.
    })

    next() // Uma função que mandar ir para o Proximo. 'next()'
    
    
    // Segunda Forma. Transformando em Json.
    // res.json({ // Aqui dentro da função é colocar um objeto javascript e transformar em Json.
    //    name: 'IpodeTudo 69Chipatas',
    //    price: 699.69,
    //    discount: 0.69
    //})
    
    // Primeira Forma.
    // res.send('<h1>Estou bem!</h1><br><br><h2>Tipo HTML</h2>')
})

app.use((req, res,) => {
    console.log('Depois...\n')
    // Next -> é uma função middleware
    //next() // Uma função que mandar ir para o Proximo. 'next()'
})

// Callback executa quando binding ocorrer com sucesso
app.listen(3000, () => {
    console.log('Backend executando...!\n')
})