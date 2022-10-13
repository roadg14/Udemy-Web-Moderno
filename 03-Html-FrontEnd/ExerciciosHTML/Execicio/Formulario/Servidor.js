// Usando um servidor express. primeiro acessando a pasta pelo nodejs=terminal.
// Iniciando com o = npm init -y -> criar o arquivo.
// Instalar -> npm i --save express@4.16.3 + body-parser@1.18.2
// Instalar para o servidor fica resetando -> npm i --save-dev nodemon. Iniciar o Servidor é -> nodemon Servidor.js
// Como Executar no node é -> node Servidor.js "o servidor é iniciado".


const express = require('express')
const app = express()
const bodyParser = require('body-Parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
  console.log(req.body);
  resp.send('<h1>Parabens. Usuário Incluido!!!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
  console.log(req.params.id);
  console.log(req.body);
  resp.send('<h1>Parabens. Usuário Alterado!!!</h1>')
})

app.listen(3003)
