const fs = require("fs")

const caminho = __dirname + "/Arquivo.json"

//Sicrono - Toma cuidado para que ele não permaneça lendo o arquivo sem parar
// Sicrono...
// "readFileSync" -> Ler um arquivo de forma sicronica
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

// Assicrono...

fs.readFile(caminho, 'utf-8', (err, conteudo)=> {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) // Esse console.log foi executado depois do de baixo.
})

// Um outro Modo de fazer igual o de cima
const config = require ("./Arquivo.json")
console.log(config.db);

fs.readdir(__dirname, (err, conteudo) =>{
    console.log("Conteúdo da pasta...");
    console.log(arquivos)
})