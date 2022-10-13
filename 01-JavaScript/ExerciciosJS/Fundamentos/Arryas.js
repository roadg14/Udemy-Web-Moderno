const valores = [7, "Douglas", true, "Rodrigues", "Ferreira", 13.0, "Campos"];
console.log(valores[2], valores[1]);
console.log(valores[1], valores[3], valores[4], valores[6]);
console.log(valores[0], valores[2], valores[5]);

valores[10] = 10;
console.log(valores);
console.log(valores.length);//Função .length. informa a quantidades de itens que tem. no caso em número.


/*valores.push({id: Neymar}, false, null, 'testo');// Função .push. é um adicionando novas itens.
console.log(array);*/

console.log(valores.pop());
delete valores[0]; //Delete é ele elimina uma array de dentro.
console.log(valores)

console.log(typeof valores); //typeof que tipo é se é um number, ou um string. mais é object.
