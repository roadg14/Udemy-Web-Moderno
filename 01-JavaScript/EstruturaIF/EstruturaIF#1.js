function SoBoaNoticia(nota) {
    if(nota >= 7) {  // Nota é maior ou igual a 7 ? se sim ele é aprovado, se não ele é não mostrara nada.
        console.log("Aprovado", + nota);
    }
}

SoBoaNoticia(8.1); // Assim que se chama uma function, sempre fora.
SoBoaNoticia(4.2);

function SeforVerdadeEuFalo(valor){
    if(valor) {
        console.log("É verdade...", + valor)
    }
}

SeforVerdadeEuFalo();
SeforVerdadeEuFalo(null);
SeforVerdadeEuFalo(undefined);

function Resultado(nota) {
    if(nota >= 7) {
        console.log("Aprovado", + nota);
    }
}function SoBoaNoticia(nota) {
    if(nota >= 7) { 
        console.log("Aprovado", + nota);
    }
}

SoBoaNoticia(8.1);
SoBoaNoticia(4.2);

function SeforVerdadeEuFalo(valor){
    if(valor) {
        console.log("É verdade...", + valor)
    }
}

SeforVerdadeEuFalo();
SeforVerdadeEuFalo(null);
SeforVerdadeEuFalo(undefined);
SeforVerdadeEuFalo(NaN);
SeforVerdadeEuFalo("");
SeforVerdadeEuFalo(0);
SeforVerdadeEuFalo(-1);
SeforVerdadeEuFalo(" ");
SeforVerdadeEuFalo("?");
SeforVerdadeEuFalo([]);
SeforVerdadeEuFalo([1, 2]);



function Resultado(nota) {
    if(nota >= 7) {
        console.log("Aprovado", + nota);
    }
}