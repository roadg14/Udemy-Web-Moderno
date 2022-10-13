const pessoa = {
    saudacao: "Bom dia!",
    falar(){ // Um modo de criar uma function.
        console.log(this.saudacao); // esse " this. ", ele é um modo de selecionar oque voce quer que seja impresso.
    }
}
pessoa.falar();

const falar = pessoa.falar
falar(); // Aqui ela não encontrar o this.saudacao.

const falarsobrepessoa = pessoa.falar.bind(pessoa) // Utilizando o BIND ela vai até a constante anterior e linka ela novamente.
falarsobrepessoa();

const falar2 = pessoa.falar.bind(pessoa) // bind, ele vai encontra uma constante.
falar2();

////////////////////////////////////////////////////

const pessoa1 = {
    nome: "Aniele",
    sobrenome: "Tavares",
    falarcomigo() {
        console.log(this.nome);
        console.log(this.sobrenome);
    }
}
pessoa.falarcomigo()

const falarr1 = pessoa.falarcomigo
falarr1();

const falarr2 = pessoa.falarcomigo.bind(pessoa)
falarr2()