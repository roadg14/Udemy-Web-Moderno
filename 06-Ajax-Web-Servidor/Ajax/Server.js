// body-parser -> responsável por fazer o parser do body da requisição.
// Interpreta dados e deixa pronto para serem utilizados.
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer') // interpretar arquivo para upload.

// middleware -> função que será executada quando determinada requisição chegar
// Dentro desta pasta deve servir os arquivos estáticos.
app.use(express.static('.')) // Ele vai prover os arquivos estaticos.
app.use(bodyParser.urlencoded({ extended: true})) // submite de formulario. esse codigo vai ser responsavel por ler os dados e transformar em OBJETO.
// Transforma dados de um submit de formulário em objeto.
app.use(bodyParser.json()) // Se vinher um json, esse codigo vai ser aplicado para torna o json em um OBJETO.
// Irá transformar json recebido em objeto.

// serve para configurar a pasta que será salvo o arquivo e também para editar nome do mesmo.
const storage = multer.diskStorage({ //Metodo de fazer um Download de algum arquivo.
    destination: function (req, file, callback) {
        callback(null, './upload') // O destino para onde vai o download // recebe como parâmetro pasta em que será salvo arquivo, neste caso atual.
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) // Como o nome vai sair quando for baixado. // definindo nome padrão do arquivo
    }
})

const upload = multer({ storage }).single('arquivo') // interpreta upload recebido via requisição
// arquivo -> recebe info do input de mesmo nome

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro!')
        }

        res.end('Concluído com sucesso!')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // pegando tudo que vem do body e passando para array -> necessário ter configurado bodyParser
        id: 1 // retorno tudo que venho do body + o id
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0 // Uma forma simples de saber qual é PAR ou IMPAR
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

// app.get('/teste', (req, res) => res.send('Ok')) // Quando vinher algum formulario nessa URL-TESTE, chame esse comando. (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...')) // Dando inicio ao servidor.