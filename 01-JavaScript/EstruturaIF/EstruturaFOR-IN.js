for(let i = 1; i <= 10; i++) {
    console.log("i =", + i);
}

const notas = [2.3, 3.4, 5.4, 6.9, 5.6, 9.8];
for(let i in notas) {// O " in " ele pecorre por indeci.
    console.log(i, notas[i]);
}

const pessoa = {
    nome: "Aniele",
    sobrenome: "Tavares",
    idade: 24,
    peso: 78
}

for(let atributo in pessoa) {
    console.log({atributo} = pessoa[atributo]);
}