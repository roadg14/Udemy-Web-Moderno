const url = "https://file.cod3r.com.br/curso.js/funcionarios.json"
const axios = require("axios")

const chineses = f => f.pais === "China" // Aqui ele ta chamando uma função para encontrar a pessoa pelo pais.
const mulheres = f => f.genero === "F" // Aqui é pelo Genero que é Feminino. 
const menorSalario = (func, funcAtual) => { // Uma forma de retorno se não form maior que o outro.
    return func.salario < funcAtual.salario ? func : funcAtual

}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funciona3rios);

    // Mulher Chinesa com menor salario.
    const func = funcionarios
    .filter(chineses) // Um filtro para achar pelo pais
    .filter(mulheres) // Um filtro para contrar o tipo de genero
    .reduce(menorSalario) // Um filtro para achar os salarios
    console.log(func);
})

// Uma formula de busca de funcionarios por genero, salario, pais ou estado.