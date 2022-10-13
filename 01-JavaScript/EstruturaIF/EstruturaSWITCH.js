const ResultadoEscolar = function(nota){
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Parabéns aprovado com exelencia!");
            break //Se não for colocado o Break, todo o codigo passa direto e executa tudo de uma vez.
        case 8:
        case 7:
            console.log("Aprovado!");
            break
        case 6: case 5:
            console.log("Recuperação");
        case 4: case 3: case 2: case 1: case 0:
            console.log("Reprovado!");
            break
        default:
            console.log("Nota invalida");
    }
    console.log("Fim!")
}
ResultadoEscolar(3);