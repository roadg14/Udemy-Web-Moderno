function teste1(num) {
    if(num >= 7) {
        console.log("Aprovado", + num);
    }
}
teste1(7.0);
teste1(8.0);

function teste2(num1) {
    if(num1 > 7) // E nunca usar o " ; " na estrutura de IF, por que ela para alguns comandos que estão sendo chamadas.
    console.log(num1);// Esse comando está ligado ao num1 e é chamado mesmo sem as chaves.
    console.log("Final");// Esse comando não está associado ao IF então ela será executada no inicio e no final.
}
teste2(6);
teste2(8);