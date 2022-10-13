let valor // Desse jeito ele não tem nenhum atributo, então irá da Undefined.
console.log(valor);

valor = null; //Null significa ausencia de valor.
console.log(valor);
/*console.log(valor.toString());*/// Outro comando que da erro quando é utilizado.

const produto = {};
console.log(produto.preco);// Esse comando da undefined, por que o preço não foi definido.
console.log(produto);

produto.preco = 53.55;
console.log(produto);

produto.preco = undefined;// Evitar ta colocando os atributos undefined.
console.log(!!produto.preco);
console.log(produto.preco);
/*delete produto.preco;*/

produto.preco = null;// Sempre que for dado um novo atributo ele será sempre o final até ser colocado um novo. ou não.
console.log(!!produto.preco);
console.log(produto);
