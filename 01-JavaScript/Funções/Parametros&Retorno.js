// Paramentros e Retorno são opcionas 
function area(largura, altura){
    const area = largura * altura;
    if (area > 20) {
        console.log("Valor acima do permitido:" + area,"m2");
    }else {
        return area
    }
}
console.log(area(2, 2));
console.log(area(2));
console.log(area(20,10));
console.log(area());

// Outro Exemplo.

function soma (a, b){
    if(a > b) {
        console.log("Valor de A:" + a);
        return
    }else if (b > a){
        console.log("Valor de B:" + b);
    }else{
        console.log("Numeros são iguais: Valor de A:" + a," ", "Valor de B:" + b);
    }
    
}
soma(9, 10);

// Exemplo.
