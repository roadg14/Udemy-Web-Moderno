let idade = 18; //Numbr
let nome = "Douglas"; // String
let array = ["Douglas", 32, true]; //Objet
let estaSol = true; // Boolean
let codigo = "cod3r";
console.log(codigo.charAt(2));// procurar a letra na Array ou Variavel
console.log(codigo.charCodeAt(3));// Procurar selecionar o numero
console.log(codigo.indexOf('2'));//Selecionar o numero na variavel ou no Nome
console.log(codigo.substring(1));// Escreve ao contrario
console.log(codigo.substring(0, 3));// Escreve do 0 até 2, não inclui o indeci final
console.log('Codigo'.concat(codigo).concat("!"));// Concatena, nome e esclamação ou qualquer outro tipo de informação que deseja
console.log(codigo.replace(3, 'e'));//Subtitui letras da sua variavel se for STRING, Informa com o numero e depois usa aspas para Dizer a nova letra

console.log(typeof idade);// Que tipo é 
console.log(typeof nome);
console.log(typeof array);
console.log(typeof estaSol);
console.log('Douglas, Thiago, Guilherme'.split());//Array com split