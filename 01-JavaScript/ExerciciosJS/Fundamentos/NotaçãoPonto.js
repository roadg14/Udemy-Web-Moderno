// Acesso a qualquer objetico ou variavel sempre com a anotação ponto.".".

console.log(Math.ceil(7.1)); // Math.ceil ele arredonda o numero se é 5.1 ele torna em 6.

const obj = {};
obj.name = "Douglas";// Mlehor forma de se fazer essas anotações.
//obj["name"] = "Tavares"
console.log(obj.name);

function Obj(nome) {
    this.nome = nome;
    this.exec = function(){
        console.log("Fui...");
    }
}
const Obj1 = new Obj("Douglas");
const Obj2 = new Obj("Rodrigues");
console.log(Obj1.nome);
console.log(Obj2.nome);
Obj2.exec();

function Name(nome) {
    this.nome = nome;
}
const Name1 = new Name("Douglas");
const Name2 = new Name("Rodrigues");
console.log(Name1.nome);
console.log(Name2.nome);