function soma() {
    let soma = 0;
    for(i in arguments){
        soma += arguments[i]// Concatena, arguments com ele vario você pode fazer ele com qualquer operação.
    }
    return soma
}
console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));