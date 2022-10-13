const ResultadoEscolar = function(nota) {
    if(nota >= 7){
        console.log("APROVADO COM A NOTA", + nota, "PARABÉNS");
    }else {
        console.log("REPROVADO", + nota, "ESTUDE MAS UM POUCO!");
    }
}
ResultadoEscolar(6.3);
ResultadoEscolar(9.0);
// ResultadoEscolar("Epa!!!")// Chamando um resultado com string ela vai ser chamado mas isso não pode ser utilizado assim.
// Toma cuidado, para evitar esse tipo de Comandos. 