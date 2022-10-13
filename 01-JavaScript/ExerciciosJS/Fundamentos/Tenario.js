const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"; // Esse comando " nota >= 7 ? ", isso é uma operação Ternaria.
console.log(resultado(6.2));
console.log(resultado(8.0));
// Essa é uma Forma e tem outra a baixo.
// Essa Segunda forma.

const resultadoNota = nota => {
    return nota >= 7 ? "Aprovado" : "Reprovado"
}
console.log(resultadoNota(8.0));
console.log(resultadoNota(6.1));