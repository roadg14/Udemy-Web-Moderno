const fs = require("fs")

const protudo = {
    nome: "Celular",
    preco: 1.300,
    desconto: 0.15,
    marca: "Motorola"
}

fs.writeFile(__dirname + '/ArquivoGerado.json', JSON.stringify(produto), err => { //Cria um novo arquivo"Um Documento sobre usuario, nome, senha,idade oque voce quiser".
    console.log(err || "Arquivo Salvo!");
})

//Aqui é um arquivo gerado pelo comando no ARQUIVOESCRITA.JS.