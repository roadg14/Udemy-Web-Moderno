console.log("01)", "1" == 1); // == ele comparar duas coisa para saber se são iguais.
console.log("02)", "1" == 2); // Quando o == tiver o final não igual ela ira mostrar False. e quando for os dois iguais a comparação é True.
// "1" -> O primeiro operando.
// == -> Vai pergunta se tem igualdade entre o primeiro e o segundo operando.
// == 2 -> O segundo operando que vai definir se é igual mesmo.

console.log("03)", "1" === 1); // Três iguais "===" -> é Chamado de extrema urgencia, mais o primeiro é String e o segundo é Numbr
console.log("04)", "3" != 3); // Diferença "!=" -> saber se é diferente do primeiro operador.
console.log("05)", "3" !== 3); // Extremamente diferente

console.log("06)", 3 < 2); // 2 é maior que 3 -> False.
console.log("07)", 3 > 2); // 3 é maior que 2 -> True.
console.log("08)", 3 <= 2); // 3 maior ou igual a 2 -> True.
console.log("09)", 3 >= 2);

const d1 = new Date(0); // Expressão de dia/mês/ano.
const d2 = new Date(0);
console.log("10)", d1 === d2);
console.log("11)", d1 == d2);
console.log("12)", d1.getTime() === d2.getTime()); // Comparados ao getTime que são Number.
console.log("13)", undefined == null); // Os dois operadores são iguais, undefined e null eles não tem atributos.
console.log("14)", undefined === null);