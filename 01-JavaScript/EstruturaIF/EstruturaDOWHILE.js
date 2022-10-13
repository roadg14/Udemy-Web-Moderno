function NumeroAleatorio(min, max){ // A expressão de  DO e WHILE é a unica que pode muda de forma em que o WHILE fique no final
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let num = 100

do{
    num = NumeroAleatorio(-1, 10000) // Alterando aqui muda o quanto ele vai buscar. no caso de -1 a 1000 entre esses dois.
    console.log("As escolhas de numeros são", + num);
}while(num != -1)
console.log("Fim");