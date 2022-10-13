//Destructuring é retira certas coisas dentro de um objeto ou variavel.
const pessoa = {
    nome: "Aniele",
    sobrenome: "Tavares",
    idade: 24,
    endereco: {
        logradouro: "Rua Tavares",
        numero: 1000
    }
}
//const { nome, idade} = pessoa; // Isso é Destructuring, Onde eu retiro só essas variaveis. e pedi para chama só elas de todo o resto.
//console.log(nome, idade, "anos");
//const { nome: n, idade: i } = pessoa; // Redefinir o atributo, desconstruindo ele e colocando uma nova forma de se chamar.
//console.log(n, i);
const { nome, sobrenome, idade} = pessoa
console.log(nome, sobrenome, "tem", idade,"anos");
const { endereco: { logradouro, numero, } } = pessoa
console.log("Mora na",logradouro, numero);