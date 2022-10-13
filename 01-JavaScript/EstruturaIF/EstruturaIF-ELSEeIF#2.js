Number.prototype.entre = function(inicio, fim) { // 
    return this >= inicio && this <= fim
}

const ResultadoEscolar = function(nota) {
    if(nota.entre(9, 10)){
        console.log("Quadro de nigga! Fim.");
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado! Fim.");
    }else if (nota.entre(4, 6)) {
        console.log("Recuperação! Fim.");
    }else if (nota.entre(0, 1)){
        console.log("Reprovado! Fim.");
    }else {
        console.log("Número invalido! Fim.");
    }
}
ResultadoEscolar(6);
ResultadoEscolar(8);
ResultadoEscolar(10);
ResultadoEscolar(0);
ResultadoEscolar(-1);
ResultadoEscolar(11);

// \\ // \\ // \\ // \\ // \\ // \\ // \\.

String.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const ProdutoDesconto = function(valor) { //200 
    if (valor > 100 ) {
        console.log("Desconto de 50% na compra!");
    }else if (valor >= 50) {
        console.log("Desconto de 20% na compra!");
    }else if (valor <= 49) {
        console.log("Nenhum desconto!");
    }else {
        console.log("Sinto muito volte novamente mais tarde!")
    }
}

ProdutoDesconto(120);
ProdutoDesconto(50);
ProdutoDesconto(0);