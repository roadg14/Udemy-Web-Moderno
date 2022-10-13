// Par nome/Valor.
const saudacao = "Douglas"; // Contexto léxico 1

function text () {
    const saudacao = "Rodrigues"; // Contexto léxico 2
    return saudacao
}

// Objetos são grupros aninhados de pares nome/valor
// Formas de fazer.
const cliente = {
    nome: "Douglas",
    idade: 24,
    peso: 78,
    endereco: {
        logradouro: "Rua Nigga",
        numero: 123
    }
    
}
console.log(saudacao);
console.log(text())
console.log(cliente);